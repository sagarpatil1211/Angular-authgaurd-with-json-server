import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authservice : AuthService, private router:Router){

  }
  ngOnInit(): void {
    window.addEventListener('focus', ()=>{
      // console.log("caliing");
      if(this.authservice.isLoggedIn() == false){
        this.router.navigate([''])
      }
     
    })
  }

  logout(){
    this.authservice.logout();
  }


}
