import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  public authFunction;

  public formError: string;
  formLoading = false;

  public error;
  public authFormLoading: Observable<boolean>;

  constructor(public fb: FormBuilder, private authService: AuthService, private router: Router, route: ActivatedRoute) {
    this.authFunction = route.snapshot.data['authFunction'];
    this.error = this.authService.getError();
    this.authFormLoading = this.authService.getFormLoading();
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    });

  }

  submitAuthForm() {
    this.formLoading = true;

    if (this.authFunction === 'Sign Up') {
      this.signup();
    } else if (this.authFunction === 'Sign In') {
      this.signin();
    }
  }
  forgotPassword(e) {
    e.preventDefault();
  }

  private signup() {
    this.authService.signup(this.authForm.value);
  }
  private signin() {
    this.authService.signin(this.authForm.value);
  }
}
