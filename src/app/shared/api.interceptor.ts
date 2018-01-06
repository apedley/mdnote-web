import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromAuth from '../auth/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  public authToken: string;

  constructor(private authStore: Store<fromAuth.State>) {
    this.authStore.select(fromAuth.getToken)
      .subscribe((token) => {
        this.authToken = token;
      });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.authToken)
      });

    }
    return next.handle(req);
  }
}
