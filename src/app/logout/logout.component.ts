import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationGuard } from '../authentication.guard';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: AuthenticationService) {
    this.service.authenticate('');

   }

  ngOnInit() {
  }

}
