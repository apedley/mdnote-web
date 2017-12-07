import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [SignupComponent, SigninComponent]
})
export class UsersModule { }
