import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  public formError: string;
  formLoading = false;

  constructor(public fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    });

  }
  submitSignupForm() {
    this.formLoading = true;
    console.dir(this.signupForm.value);
    this.authService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.dir(response);
        this.router.navigate(['/signin']);
      },
      (err) => {
        this.formError = err.error;
        this.formLoading = false;
      }
    );
  }
}
