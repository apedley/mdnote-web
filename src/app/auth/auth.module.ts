import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SingleViewLayoutComponent } from 'app/core/containers/single-view-layout/single-view-layout.component';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthViewComponent } from './containers/auth/auth-view.component';
import { AuthEffects } from './store/effects';
import { reducers } from './store/reducers';

const components = [
  AuthViewComponent,
  AuthFormComponent,
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    CoreModule
  ],
  declarations: components,
  exports: components,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '',
        component: SingleViewLayoutComponent,
        children: [
          {
            path: 'signup',
            component: AuthViewComponent,
            data: {
              hideSidebar: true,
              authFunction: 'Sign Up'
            }
          },
          {
            path: 'signin',
            component: AuthViewComponent,
            data: {
              hideSidebar: true,
              authFunction: 'Sign In'
            }
          }
        ]
      }

    ]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}
