import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Expediente } from "./expedientes.model";
import { userLogin }    from '../login/login.model';
import { LoginService }    from '../login/login.service';

@Injectable()
export class ExpedientesService{
	private expediente:Expediente = new Expediente();
	private user:userLogin;
	private token:string;	
	private url:string = "http://local.api.regexp.com/expedientes";

	constructor(private http: HttpClient, private session: LoginService){
		this.token = this.session.getSession().token;
	}

	get(url:string): Observable<Expediente[]> {
		let t:string = (url.indexOf('?') == -1)? '?':'&';
	  	return this.http.get(url+t+'token='+this.token).
	  		map(res => { 
        		return res;
        });	
	}

	find(id: number){
		let url: string = this.url+"/"+id+'/edit?token='+this.token; 
		return this.http.get(url).
		  	map(res => { 
	        	let data = res['data'];

	        	this.expediente = {
	        		id : Number(data['id']),
	        		num_expediente : data['num_expediente'],
		        	id_cliente : data['id_cliente'],
		        	id_institucion : data['id_institucion'],
		        	nombre_causa : data['nombre_causa'],
		        	descripcion : data['descripcion'],
		        	fecha_expediente : data['fecha_expediente'],
		        	status : data['status']
	        	}
	        	return this.expediente;
	        })
	}

	save(expediente): Observable<any> {	
		let url: string = this.url+"?token="+this.token; 
		let body = Object.assign({}, expediente)

		return this.http.post(url, body).
	  	map(res => { 
        	return res;
        })
	}

	update(expediente): Observable<any> {	
		let url: string = this.url+"/"+expediente.id+"?token="+this.token; 
		let body = Object.assign({}, expediente)

		return this.http.put(url, body).
	  	map(res => { 
        	return res;
        })
	}

	delete(id: number){
		let url: string = this.url+"/"+id+'?token='+this.token; 
		return this.http.delete(url).
		  	map(res => { 
	        	return res;
	        })
	}

	clientesExpedientes(): Observable<any[]> {
	  	return this.http.get(this.url+'-clientes?token='+this.token).
	  		map(res => { 
        		return res;
        });	
	}

	expedientesClientes(id: number): Observable<any>{
		let url: string = this.url+"-clientes/"+id+"?token="+this.token; 

		return this.http.get(url).
	  	map(res => { 
        	return res;
        })
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}