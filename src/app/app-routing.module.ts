import { AuthGuard } from './users/auth.guard';
import { AuthComponent } from './users/views/auth/auth.component';
import { SigninComponent } from './users/views/signin/signin.component';
import { SignupComponent } from './users/views/signup/signup.component';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './core/containers/home-view/home-view.component';

const routes: Routes = [

  {
    path: 'signup',
    component: AuthComponent,
    data: {
      sidebar: false,
      authFunction: 'Sign Up'
    }
  },
  {
    path: 'signin',
    component: AuthComponent,
    data: {
      sidebar: false,
      authFunction: 'Sign In'
    }
  },
    {
      path: '',
      pathMatch: 'full',
      component: HomeViewComponent,
      canActivate: [AuthGuard],
      data: {
        sidebar: true
      }
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {useHash: false})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
