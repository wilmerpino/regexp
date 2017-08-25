import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Cliente} from './clientes.model';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styles: []
})

export class ClientesFormComponent implements OnInit {
  	

  	@Input() cliente:Cliente;
  	@Output() save = new EventEmitter<any>();


	constructor(){}

	ngOnInit(){

	}

	onSave(cliente): void{
		this.save.emit(cliente);
	}

	onCancel(): void{
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
	}

	

}	