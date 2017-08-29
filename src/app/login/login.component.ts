import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { userLogin }    from './login.model';
import { LoginService }    from './login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 	private submitted:boolean;
  private type: string;
  private message: string;
   

   user = {
     'email': 'wilmerpino@gmail.com',
     'password' : 'europa'
   }

  	constructor(private http: HttpClient, private router: Router, private loginServ: LoginService) {
  		this.submitted = false;
   	}

	ngOnInit() {
		console.log(this.user);
  	}

 	onSubmit() { 
  		this.submitted = true; 
  	}


  	loginSubmit(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        this.loginServ.Login(this.user.email, this.user.password)
            .subscribe(
                result =>  
                  {
                      //console.log(result);
                      if(this.loginServ.isLogged()){
                          this.router.navigate(['/']);
                      }                     
                  },
                  err => {
                      console.log(err);
                      this.type = "danger";
                      this.message = "Nombre de usuario o contraseña no valida";
                  }
             )
	}

	loginCancel(){
		this.user.email = "";
	 	this.user.password = ""; 
	}
}
