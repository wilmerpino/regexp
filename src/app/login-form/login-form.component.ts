import { Component, OnInit } from '@angular/core';
import { Login }    from '../login/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
 	private submitted:boolean;

  	myUsuario = new Login('wilmerpino@gmail.com', 'xxx', false, true);
  	constructor() {
  		this.submitted = false;
   	}

	ngOnInit() {
		console.log(this.myUsuario);
  	}

 	onSubmit() { 
  		this.submitted = true; 
  	}

  	// TODO: Remove this when we're done
  	get diagnostic() { 
  		return JSON.stringify(this.myUsuario); 
  	}

  	loginSubmit(){
	  	alert(this.myUsuario.login)
	}

	loginCancel(){
		this.myUsuario.login = "";
	 	this.myUsuario.passwd = ""; 
	}
}
