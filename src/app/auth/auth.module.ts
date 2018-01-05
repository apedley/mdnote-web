import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../core/app-material.module';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule } from '@angular/router';
import { GoogleComponent } from './components/google.component';
import { OAuthListComponent } from './components/oauth-list/oauth-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'google', component: GoogleComponent }
    ]),
    RouterModule,
    AppMaterialModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  declarations: [
    AuthComponent,
    OAuthListComponent,
    GoogleComponent
  ]
})
export class AuthModule { }
