import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../store/reducers';
import * as Auth from '../../store/actions';

import { ActivatedRoute } from '@angular/router';
import { Authenticate } from '../../user.model';
import { LayoutService } from '../../../core/layout.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {

  public authFunction;

  formError;
  formLoading;

  constructor(private store: Store<fromAuth.State>, public route: ActivatedRoute, public layout: LayoutService) {
    this.authFunction = route.snapshot.data['authFunction'];
    this.formError = this.store.select(fromAuth.getAuthFormError);
    this.formLoading = this.store.select(fromAuth.getAuthFormLoading);

    this.layout.setTitle(this.authFunction);

  }

  ngOnInit() {
  }

  submitAuthForm(authData: Authenticate) {
    if (this.authFunction === 'Sign Up') {
      this.store.dispatch(new Auth.Signup(authData));
    } else if (this.authFunction === 'Sign In') {
      this.store.dispatch(new Auth.Signin(authData));
    }
  }

  forgotPassword(e) {
    e.preventDefault();

    this.layout.openConfirmationDialog({ title: 'Forgot Password', content: 'Coming soon'}, false);
  }

}
