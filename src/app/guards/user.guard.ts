import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
 
  canActivate() {
    if(localStorage.getItem('usertype')==null)
    return false
    else if(localStorage.getItem('usertype')=="user" || localStorage.getItem('usertype')=="admin")
    return true
    else
    return false
  }
  
}
