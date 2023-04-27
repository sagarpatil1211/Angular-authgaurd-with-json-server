import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  get(url:string){
    return this.http.get(url)
  }

  post(url:string, data:any){
    return this.http.post(url, data)
  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }

  setToken(token:any){
    localStorage.setItem("token", token)
  }
  getToken(){
    return localStorage.getItem("token")
  }

  isLoggedIn(){
    if(localStorage.getItem('user') != null)
    return true
    else{
    this.router.navigate([''])
    return false
    }
  }



}
