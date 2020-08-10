import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router : Router){}
  	canActivate(
    	next: ActivatedRouteSnapshot,
   	 	state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  		const item = localStorage.getItem("user_token");
  		if(!item){
  			this.router.navigate(['/log-kWZr1n0-in']);
  			return false;
  		}
  		const token = JSON.parse(item);
  		const now = new Date();
  		if(now.getTime() > token.expiry){
  			localStorage.removeItem("user_token");
  			this.router.navigate(['/log-kWZr1n0-in']);
  			return false;
  		}
    	return true;
  }
  
}
