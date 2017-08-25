import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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

   user = {
     'email': 'wilmerpino@gmail.com',
     'password' : 'europa'
   }

  	constructor(public toastr: ToastsManager,  private http: HttpClient, private router: Router, private loginServ: LoginService) {
      //this.toastr.setRootViewContainerRef(vcr); vcr: ViewContainerRef,
  		this.submitted = false;
   	}

	ngOnInit() {
		console.log(this.user);
  	}

 	onSubmit() { 
  		this.submitted = true; 
  	}

  	// TODO: Remove this when we're done
  	get diagnostic() { 
  		return JSON.stringify(this.user); 
  	}

  	loginSubmit(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        this.loginServ.Login(this.user.email, this.user.password)
            .subscribe(
                result =>  
                  {
                      if(this.loginServ.isLogged()){
                        this.router.navigate(['/']);
                      }
                      else{
                          alert("Nombre de usuario o contraseña no valida");
                      }
                  }
             )

	  	  /*let data = [];
        let url = 'http://local.api.regexp.com/login';

        this.http.post(url, this.user)
             .subscribe(
              // Successful responses call the first callback.
              data => {
                var userLogged = data['user'];
                console.log(`Usuario  ${userLogged.name} logueado`);
                this.router.navigate(['/']);
              },
              // Errors will call this callback instead:
              err => {
                //this.toastr.error
                alert('Something went wrong!' + '\nOops!');
              })*/
	}

	loginCancel(){
		this.user.email = "";
	 	this.user.password = ""; 
	}
}
