import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cliente } from "./clientes.model";

@Injectable()
export class ClientesService{
	private cliente:Cliente = new Cliente();

	constructor(private http: HttpClient){

	}

	get(url:string): Observable<Cliente[]> {
	  return this.http.get(url).
	  	map(res => { 
        	console.log(res);
        	return res;
        })	
	}

	find(id: number){
		let url: string = "http://local.api.regexp.com/clientes/"+id; 

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

/*http
  .post('/api/items/add', body, {
    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  })
  .subscribe();*/

	save(cliente): Observable<any> {	
		let url: string = "http://local.api.regexp.com/clientes"; 
		let body = Object.assign({}, cliente)

		return this.http.post(url, body).
	  	map(res => { 
        	console.log(res);
        	return res;
        })
	}

	delete(id: number){
		let url: string = "http://local.api.regexp.com/clientes/"+id; 
//, {headers: new HttpHeaders().set('Authorization', 'my-auth-token')}
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