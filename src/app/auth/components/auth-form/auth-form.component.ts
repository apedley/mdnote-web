import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from '../../user.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],

})
export class AuthFormComponent implements OnInit {
  @Input() error: string = null;
  @Input() loading = false;
  @Input() authFunction = '';

  @Output() submitForm = new EventEmitter<Authenticate>();

  authForm: FormGroup;

  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  submitAuthForm() {
    this.submitForm.emit(this.authForm.value);
  }

}
