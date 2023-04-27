import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit  {

  adminData:any;
  constructor(private authservice:AuthService){

  }
  ngOnInit(): void {
   this.authservice.get("http://localhost:3000/admins").subscribe((result:any)=>{
    this.adminData = result;
    
   })
  }


}
