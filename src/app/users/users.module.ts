import { UsersRoutingModule } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent],
  exports: [UsersRoutingModule]
  })
export class UsersModule { }
