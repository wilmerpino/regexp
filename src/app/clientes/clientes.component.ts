import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {PaginationComponent } from '../pagination/pagination.component';
import { ClientesService } from './clientes.service';
import { Cliente } from "./clientes.model";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})


export class ClientesComponent implements OnInit {
  cliente: Cliente = new Cliente;
	clientes:any[];
  data:any = [];
  page: number = 1;
  total: number = 0;
  limit:number = 10;
  loading:boolean = true;
  pagesToShow:number=10;
  url:string = 'http://local.api.regexp.com/clientes';
  url_next:string = "";
  url_prev:string = "";
  dataSend:any = [];
  _id:number;
  rif : string;
	constructor(private clienteService: ClientesService){

	}


  	ngOnInit() {
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
            this.cliente = data;
        },
         error => {
             alert("Error inesperado");
        });
    }

    delCliente(id): void{      
       this.loading = true;
       this.clienteService.delete(id).subscribe( 
         data => {
            this.loading = false;           
            this.getClientes();
            alert(data['message']);
        },
         error => {
             alert("Error inesperado");
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

    saveClientes(cliente){
      this.loading = true;
      let message:string;
         this.clienteService.save(cliente).subscribe( 
           data => {
              this.loading = false;
              message = data['message'];
              alert(message);
              this.getClientes();
          },
           error => {
               alert("Error inesperado");
          });  
    }
}