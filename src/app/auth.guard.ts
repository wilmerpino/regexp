import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService }    from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
	
	constructor(private session: LoginService)	{

	}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.session.isLogged();
  }
}
