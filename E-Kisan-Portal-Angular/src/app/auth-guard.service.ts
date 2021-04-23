import { Injectable } from '@angular/core';
import {UserserviceService} from './userservice.service';
import {AuthenticationService} from './authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToasterService } from './toaster.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,private toaster:ToasterService,
    private userService: UserserviceService, private authenticationService:AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authenticationService.isUserLogin())
        return true;
  
      this.router.navigate(['login']);
      this.toaster.showError("Please Login","Login");
      return false;
  
    }
}
