import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:'home/admin', canActivate:[AuthGuard, AdminGuard], loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
  {path:'home/user', canActivate:[AuthGuard, UserGuard], loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
