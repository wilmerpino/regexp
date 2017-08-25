import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PanelesComponent} from '../paneles/paneles.component';

@Component({
  selector: 'app-expedientes-clientes',
  templateUrl: './expedientes-clientes.component.html',
  styles: []
})


export class ExpedientesClientesComponent implements AfterViewInit {
	/*  crear un panel */
	@ViewChild(PanelesComponent) Paneles: PanelesComponent;



	init(){
		this.Paneles.active = true;
		this.Paneles.title = "Panel #1"; 
	    this.Paneles.message = 'Hello World! Este es el panel numero 1';
	}

	//crear varios paneles

	// @ViewChildren(PanelesComponent) Paneles: QueryList<PanelesComponent>;
  		// trae la referecnia al Hijo => , { read: ElementRef }
  	ngAfterViewInit () {
    	setTimeout(_=> this.init());
    };

    /* init(){
    	Lee la instanacia del Hijo
    	console.log(this.Paneles);
    	this.Paneles.forEach(messageInstance => console.log(messageInstance));*/

		/*this.Paneles.changes.subscribe((items: Array<PanelesComponent>) => {
      		this.Paneles.forEach(
      			(item: PanelesComponent) => {
      				console.log(item.messa;ge)
      			}
      		);
		});
	}	*/
}
