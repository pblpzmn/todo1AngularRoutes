import { AuthenticationGuard } from './../authentication.guard';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'users',
    canActivate: [AuthenticationGuard],
    children: [
        { path: '', component: UsersComponent },
        { path: ':id', component: UsersComponent },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {

}