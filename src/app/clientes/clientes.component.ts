import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PaginationComponent } from '../pagination/pagination.component'
//import { ModalService } from '../modal/modal.services';

interface ClientesResponse {
	  cliente: any;
	  success: boolean;
	}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})


export class ClientesComponent implements OnInit {

	clientes:any[];
  page: number = 1;
  total: number = 0;
  limit:number = 10;
  loading:boolean = true;
  pagesToShow:number=10;
  url:string = 'http://local.api.regexp.com/clientes';
  url_next:string;
  url_prev:string;

	constructor(private http: HttpClient/*, private modalService: ModalService*/){

	}


  	ngOnInit() {
        this.getClientes(this.url);
    } 	

    getClientes(url: string): void{ 
      this.loading = true;
      this.http.get(url)
       .subscribe(
        // Successful responses call the first callback.
        data => {
          this.clientes = data['data'];
          this.total = data['total'];
          this.url_next = data['next_page_url'];
          this.url_prev = data['prev_page_url'];
          this.url = data['path'];
          console.log(this.url_prev);
        },
        // Errors will call this callback instead:
        err => {
            console.log('Something went wrong!');
        })
        // Read the result field from the JSON response.
        this.loading = false;
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

    /* openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }*/
}