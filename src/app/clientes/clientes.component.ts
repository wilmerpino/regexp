import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {PaginationComponent } from '../pagination/pagination.component';
import { ClientesService } from './clientes.service';
import { Cliente } from "./clientes.model";
import {NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ClientesFormComponent} from './clientes-form.component';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})


export class ClientesComponent implements OnInit {
	private clientes:any[];
  private page: number = 1;
  private total: number = 0;
  private limit:number = 10;
  private loading:boolean = true;
  private pagesToShow:number=10;
  private url:string = 'http://local.api.regexp.com/clientes';
  private url_next:string = "";
  private url_prev:string = "";
  private rif : string;

  private _subject = new Subject<string>();
  private message:string;
  private type:string = 'danger';
  private staticAlertClosed:boolean;

	constructor(private clienteService: ClientesService, private modalService: NgbModal){

	}


  	ngOnInit() {
      this._subject.subscribe((message) => this.message = message, (type) => this.type = type);
      debounceTime.call(this._subject, 5000).subscribe(() => this.message = null, () => this.type = 'success');
      this.getClientes(this.url);
    } 	

    getClientes(url?: string): void{ 
      if(url == undefined){
        url = 'http://local.api.regexp.com/clientes';
      }
        this.loading = true;

        this.clienteService.get(url).subscribe( data => {
              this.loading = false;
              this.clientes = data['data'];
              this.url_next = data['next_page_url'];
              this.url_prev = data['prev_page_url'];
              this.total = data['total'];
        });
    }  

    getCliente(id): void{      
       this.loading = true;
       this.clienteService.find(id).subscribe( 
         data => {
            this.loading = false;
            this.openModal(data);
        },
         error => {
            this.type = 'danger';
             this._subject.next("Error inesperado");
        });
    }

    delCliente(id): void{      
       this.loading = true;
       this.clienteService.delete(id).subscribe( 
         data => {
            this.loading = false;           
            this.getClientes();
            this.type = 'success';
            this._subject.next(data['message']);
        },
         error => {
             this.type = 'danger';
             this._subject.next("Error inesperado");
        });
    }


    openModal(cliente: Cliente) {
        let options: NgbModalOptions = {
          keyboard : false,
          size: 'lg',
        }
        
        const modalRef = this.modalService.open(ClientesFormComponent, options);
        modalRef.componentInstance.cliente = cliente;   
         modalRef.result.then((result) => {
            this.getClientes();
            this.type = 'success';
            this._subject.next(result['message']);
        }, (reason) => {
          this.type = 'success';
          this._subject.next("Error inesperado");
        });
    }

    goToPage(n){
      this.page = n;
      this.getClientes(this.url+'?page='+n);
    }

    onNext(): void {
      this.page++;
      this.getClientes(this.url_next);
    }

    onPrev(): void {
      this.page--;
      this.getClientes(this.url_prev);
    }
}