import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Cliente} from './clientes.model';
import { ClientesService } from './clientes.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styles: []
})

export class ClientesFormComponent implements OnInit {
  	@Input() cliente:Cliente;
  	@Output() save = new EventEmitter<any>();
    loading:boolean = true;

	constructor(private clienteService: ClientesService, public activeModal: NgbActiveModal){}

	ngOnInit(){

	}

  saveClientes(cliente){
    this.loading = true;
    let message:string;
    if(cliente.id == 'undefined'){
       this.clienteService.save(cliente).subscribe( 
         data => {
            this.loading = false;
            message = data['message'];
            this.close(message);
        },
         error => {
             this.close("Error inesperado");
        }); 
      }
      else{
         this.clienteService.update(cliente).subscribe( 
         data => {
            this.loading = false;
            message = data['message'];
            this.close(data);
        },
         error => {
             this.close("Error inesperado");
        }); 
      } 
  }

	close(message): void{
		this.cliente = {
    		id : null,
    		rif : '',
      	razon_social : '',
      	direccion : '',
      	telefono : '',
      	fax : '',
      	email : '',
      	logo :  ''
    	}
      this.activeModal.close(message); 
	}

	

}	