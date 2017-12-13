import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../core/app-material.module';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
