import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthViewComponent } from './containers/auth/auth-view.component';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import { AuthEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SingleViewLayoutComponent } from 'app/core/containers/single-view-layout/single-view-layout.component';

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
  declarations: [components],
  exports: [components],
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
