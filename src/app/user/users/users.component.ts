import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData:any;
  constructor(private authservice:AuthService){

  }
  ngOnInit(): void {
   this.authservice.get("http://localhost:3000/users").subscribe((result:any)=>{
    this.userData = result;
    
   })
  }
}
