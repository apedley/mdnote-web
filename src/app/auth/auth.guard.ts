import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    return this.authService.getAuthenticated().map(isAuth => {
      if (!isAuth) {
        this.router.navigate(['/signin']);
        return false;

      } else {
        return true;
      }
    });

    // this.router.navigate(['/signin']);
    // return false;
  }
  // canActivate() {
  //   if (this.authService.isAuthenticated()) {
  //     return true;
  //   }

  //   this.router.navigate(['/signin']);
  //   return false;
  // }
}
