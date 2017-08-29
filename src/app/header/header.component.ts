import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService }    from '../login/login.service';
import { userLogin } from '../login/login.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private user: userLogin;

  constructor(private session: LoginService, private router: Router) { }

  ngOnInit() {
  		this.user = this.session.getSession();
  }

  logOut(){
      this.session.removeSession();
      this.router.navigate(['/login']);
  }


}
