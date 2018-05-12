import { LogoutComponent } from './logout/logout.component';
import { UsersRoutingModule } from './users/users.routing';
import { AuthenticationGuard } from './authentication.guard';
import { UsersComponent } from './users/users/users.component';
import { AuthenticationService } from './authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {path: 'users' , component: UsersComponent }, 
  {path: 'logout' , component: LogoutComponent }, 
  /*{path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canLoad: [AuthenticationGuard]
  }*/
];

@NgModule({
  declarations: [
    AppComponent , LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    UsersModule

    
  ],
  providers: [AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
