import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: AuthenticationService, private router: Router){
  }
  authenticate(val){
    this.service.authenticate(val);
    this.router.navigateByUrl('/users');
  }

  logout(){
    this.router.navigateByUrl('/logout');
  }
  
}
