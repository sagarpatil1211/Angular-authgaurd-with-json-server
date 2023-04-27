import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any;
  formdata:any;
  userData:any;
  adminData:any;

  constructor(private authservice:AuthService, private router:Router){
    this.authservice.get("http://localhost:3000/users").subscribe((result:any)=>{
      // console.log("users",result);
      this.userData = result;
      // console.log(this.userData[0].name);  
    })
    this.authservice.get("http://localhost:3000/admins").subscribe((result:any)=>{
      // console.log("admins",result);
      this.adminData = result;
      // console.log(this.adminData[0].name);  
    })

      if(this.authservice.isLoggedIn() == true){
        this.router.navigate(['/home'])
      }
   
  }

  ngOnInit(): void {
  
  
  
    this.load();
    this.loadsignup();

  }
  load() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}')])),
      password: new FormControl('', Validators.required)
    })
  }

  loadsignup(){
    this.formdata = new FormGroup({
      name : new FormControl ('', Validators.required),
      email : new FormControl ('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}')])),
      password : new FormControl ('', Validators.required)
    }) 
  }

  login(data:any){
    // console.log(data);
    // console.log(this.userData[0]);
    
    let posting = false;
    
    for (let i = 0; i < this.userData.length; i++) {
      if(data.email == this.userData[i].email && data.password == this.userData[i].password){
        // alert("user")
        posting = true;
        localStorage.setItem('user',this.userData[i].name)
        localStorage.setItem('usertype',"user")

      }  
    }
    for (let i = 0; i < this.adminData.length; i++) {
      if(data.email == this.adminData[i].email && data.password == this.adminData[i].password){
        // alert("admin")
        posting = true;
        localStorage.setItem('user',this.adminData[i].name)
        localStorage.setItem('usertype',this.adminData[i].usertype)

      }  
    }

    if(posting){
      // alert("success")
      this.router.navigate(['/home'])
    }
    else{
      alert("Invalid Credentials")
    }
    
    

    

  }

  signup(data:any){
    this.authservice.post('http://localhost:3000/users',data).subscribe((result:any)=>{    
    })
    this.loadsignup();

  }

}
