import {Component, AnimationTransitionEvent, ElementRef, ViewChild, OnInit} from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import {PaginationComponent } from '../pagination/pagination.component';
import { ExpedientesService } from './expedientes.service';
import { Expediente } from "./expedientes.model";
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from "../clientes/clientes.model";
import {NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})

export class ExpedientesComponent implements OnInit {

  private expedientes: Expediente[];
  private clientes:any = new Array();
  private sCliente:string;
  private loading:boolean = true;
  private modeEdit:boolean = false;
  private c:Expediente;

  private _subject = new Subject<string>();
  private message:string;
  private type:string = 'danger';
  private staticAlertClosed:boolean;
  private _opened: boolean = false;

  constructor(private dialogService:DialogService, private expedienteService: ExpedientesService, private clienteService: ClientesService, private modalService: NgbModal){

	}


  	ngOnInit() {
      this._subject.subscribe((message) => this.message = message, (type) => this.type = type);
      debounceTime.call(this._subject, 5000).subscribe(() => this.message = null, () => this.type = 'success');
      this.getClientes();
    } 	

    private _toggleSidebar() {
      this._opened = !this._opened;
    }

    getExpedientes(url?: string): void{ 
      if(url == undefined){
        url = 'http://local.api.regexp.com/expedientes';
      }
        this.loading = true;

        this.expedienteService.get(url).subscribe( data => {
              this.loading = false;
              this.expedientes = data['data'];
              console.log(data);
        });
    }  

    getClientes(): void{ 
        this.loading = true;

        this.expedienteService.clientesExpedientes().subscribe( data => {
             this.loading = false;
             let r = data['data'];

             this.clientes = [];
             for(let c of r){
              	let tmp = {
	              id: c['id'],
	              rif: c['rif'],
	              direccion: c['direccion'],
	              razon_social : c['razon_social'],
	              cant : c['expediente'].length
          		}
          		if(tmp.cant > 0){
              		this.clientes.push(tmp);
              	}	
              }	
            console.log("Clientes: ", this.clientes);
        });
    } 

    showConfirm(id: number, id_cliente: number): void {
        let disposable = this.dialogService.addDialog(ConfirmComponent, {
            title:'Eliminar Expediente', 
            message:'¿Está seguro que desea eliminar el Expediente?'})
            .subscribe((isConfirmed)=>{
                //We get dialog result
                if(isConfirmed) {
                    this.borrarExpediente(id, id_cliente);
                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(()=>{
            disposable.unsubscribe();
        },10000);
    }

    searchCliente(event: any): void{
       this.loading = true;
       console.log(event.target.value);
       this.expedientes = undefined;
       if(event.target.value == '') this.getClientes();
       this.clienteService.find(event.target.value).subscribe( 
         data => {
            this.loading = false;
			this.clientes = data['data'];
        },
         error => {
            this.type = 'danger';
             this._subject.next("Error inesperado");
        });
    }

    cargarExpedientes(id: number): void{
    	this.loading = true;

       this.expedienteService.expedientesClientes(id).subscribe( 
         data => {
            this.loading = false;
			this.expedientes = data['data'];
        },
         error => {
            this.type = 'danger';
             this._subject.next("Error inesperado");
        });
    }


    borrarExpediente(id: number, id_cliente: number): void{   
       this.loading = true;
       this.expedienteService.delete(id).subscribe( 
         data => {
            this.loading = false;           
            this.cargarExpedientes(id_cliente);
           	this.getClientes();
            this.type = 'success';
            this._subject.next(data['message']);
        },
         error => {
             this.type = 'danger';
             this._subject.next("Error inesperado");
        });
    }

    editarExpediente(){
    	this.modeEdit = true;
    }
    /*openModal(expediente: Expediente) {
        let options: NgbModalOptions = {
          keyboard : false,
          size: 'lg',
        }
        
        const modalRef = this.modalService.open(ExpedienteFormComponent, options);
        modalRef.componentInstance.expediente = expediente;   
         modalRef.result.then((result) => {
            this.getExpedientes();
            this.type = 'success';
            this._subject.next(result['message']);
        }, (reason) => {
          this.type = 'success';
          this._subject.next("Error inesperado");
        });
    }*/
}
