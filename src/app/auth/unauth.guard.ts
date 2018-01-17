import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UnauthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    return this.authService.getAuthenticated().map(isAuth => {
      if (isAuth) {
        this.router.navigate(['/notes']);
        return false;
      } else {
        return true;
      }
    });
  }
}
