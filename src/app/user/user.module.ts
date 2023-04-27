import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    UsersComponent,
    AboutComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
