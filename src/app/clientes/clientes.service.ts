import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cliente } from "./clientes.model";
import { userLogin }    from '../login/login.model';
import { LoginService }    from '../login/login.service';

@Injectable()
export class ClientesService{
	private cliente:Cliente = new Cliente();
	private user:userLogin;
	private token:string;	
	private url:string = "http://local.api.regexp.com/clientes";

	constructor(private http: HttpClient, private session: LoginService){
		this.token = this.session.getSession().token;
	}

	get(url:string): Observable<Cliente[]> {
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

	        	this.cliente = {
	        		id : Number(data['id']),
	        		rif : data['rif'],
		        	razon_social : data['razon_social'],
		        	direccion : data['direccion'],
		        	telefono : data['telefono'],
		        	fax : data['fax'],
		        	email : data['email'],
		        	logo : data['logo']
	        	}
	        	return this.cliente;
	        })
	}

	save(cliente): Observable<any> {	
		let url: string = this.url+"?token="+this.token; 
		let body = Object.assign({}, cliente)

		return this.http.post(url, body).
	  	map(res => { 
        	return res;
        })
	}

	update(cliente): Observable<any> {	
		let url: string = this.url+"/"+cliente.id+"?token="+this.token; 
		let body = Object.assign({}, cliente)

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


	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}