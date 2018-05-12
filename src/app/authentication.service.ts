import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;
  passwor: string = 'abc123';
  constructor() {


   }
   authenticate(inputPassword: string){
      if (this.passwor === inputPassword){
        this.authenticated = true;
      }
   }
}
