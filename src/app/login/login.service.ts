import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { userLogin }    from './login.model';

@Injectable()
export class LoginService{
	
	constructor(private http: HttpClient){

	}

	public Login(user: string, password: string): Observable<any>{
		let url: string = "http://local.api.regexp.com/login"; 
		
		return this.http.post(url, {"email": user, "password": password}, this.getHeaders())
			.map((res: Response) => this.setSession(res))
			.catch((error:any) => Observable.throw(error || 'Server error'));      
	}

	public isLogged(): boolean{
		if(typeof(Storage) !== 'undefined'){
			if(sessionStorage.getItem('session')){
				return true;
			}
		}
		return false;	
	}

	public getSession(): any{
		if(typeof(Storage) !== 'undefined'){
			if(sessionStorage.getItem('session')){
				 return JSON.parse(sessionStorage.getItem('session'));
			}
		}
		return null;	
	}

	public removeSession(){
		sessionStorage.removeItem('session');
	}

	private getHeaders(){
	    // I included these headers because otherwise FireFox
	    // will request text/html instead of application/json
	    let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	}

	private setSession(req: any): userLogin{
		let data = req['user'];
		let sesionUser:userLogin = {
			id: data['id'],
	  		email :data['email'],
	  		auth : data['tipo'],
	  		name : data['name'],
	  		token : req['token'],
	  		keepsession: true,
	  		remember: true,
	  		logged : true
	  	}
  		
  		console.log(sesionUser);
  		sessionStorage.setItem('session', JSON.stringify(sesionUser));
  		console.log(sesionUser);
  		return sesionUser;
	}
}