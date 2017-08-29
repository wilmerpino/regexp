import { Component } from '@angular/core';
import { LoginService }    from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RegExp';
  logged = false;

  constructor(private session: LoginService, private router: Router){
  		if(!this.session.isLogged())
  			this.router.navigate(['/login']);
  		else
  			this.logged = true;
  }
}
