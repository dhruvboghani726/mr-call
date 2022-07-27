import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

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

      const currentUser = this.service.currentUserValue;
        const currentMr = this.service.currentMrValue;
        if (currentUser || currentMr) {
            // logged in so return true
            return true;
        }

        else if (currentMr) {
            this.router.navigate(['/doctor/doctor-login'], { queryParams: { returnUrl: state.url } });
            return false;
        }

        else if (currentUser) {
            this.router.navigate(['/mr/mr-login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        else {
            this.router.navigate(['website/home']);
            return false;
        }
  }
  
}
