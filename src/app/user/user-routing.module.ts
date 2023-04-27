import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:LandingComponent, 
  children:[
    {path:'', component:UsersComponent},
    {path:'users', component:UsersComponent},
    {path:'about', component:AboutComponent},
    {path:'**', component:UsersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
