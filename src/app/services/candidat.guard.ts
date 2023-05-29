import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CandidatGuard implements CanActivate {
  constructor(private login: LoginService,private router: Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean | UrlTree {
    if (this.login.isLoggedIn() && this.login.getUserRole() == 'CANDIDAT'){
        return true;
    }
    this.router.navigate(['login']);
    return false;
  }
 
  
}
