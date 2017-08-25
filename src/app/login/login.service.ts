import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { userLogin }    from './login.model';

@Injectable()
export class LoginService{

	constructor(private http: HttpClient){

	}

	public Login(user: string, password: string): Observable<any>{
		let url: string = "http://local.api.regexp.com/login"; 
		
		return this.http.post(url, {"email": user, "password": password}, this.getHeaders())
            .map(res:Response => res.json())
            .subscribe(
             	data => 
             		this.setSession(data)
             	,
             	error => 
             		console.log(error)	
			);           
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
				 return sessionStorage.getItem('session');
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

	private setSession(req: any){
		console.log("set")
		console.log(req);
		let data = req['user'];

		let sesionUser = <userLogin>({
			id : data['id'],
	  		email : data['email'],
	  		auth : data['tipo'],
	  		name : data['name'],
	  		token : data['token'],
	  		remember : true,
	  		keepsession : true
  		});
  		
  		sessionStorage.setItem('session', JSON.stringify(sesionUser));
	}
}