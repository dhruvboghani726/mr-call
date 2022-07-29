import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      // const userData = this.service.userInfo.getValue();
      // if(!this.service.isLoggedIn()){
      //   this.router.navigate(['mr/mr-login']);
      //   return false;
      // }
      // return true;

      const currentMr = this.service.currentMrValue;
        const currentDoctor = this.service.currentDoctorValue;
        if (currentDoctor || currentMr) {
            // logged in so return true
            return true;
        }

        else if (currentDoctor) {
            this.router.navigate(['doctor/doctor-login']);
            return false;
        }

        else if (currentMr) {
            this.router.navigate(['mr/mr-login']);
            return false;
        }
        else {
            this.router.navigate(['website/home']);
            return false;
        }
  }
  
}
