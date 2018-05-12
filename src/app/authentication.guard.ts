import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
//export class AuthenticationGuard implements CanLoad {
    constructor(private service: AuthenticationService) {
        console.log("guard");
     }

    canLoad(route: Route ): boolean {
        console.log("can load");
        console.log(this.service.authenticated);
        return this.service.authenticated;
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){
            return this.service.authenticated;    
        }
    
}