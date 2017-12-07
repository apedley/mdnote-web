import { SigninComponent } from './users/views/signin/signin.component';
import { SignupComponent } from './users/views/signup/signup.component';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './core/containers/home-view/home-view.component';

const routes: Routes = [

  {
    path: 'signup',
    component: SignupComponent,
    data: {
      sidebar: false
    }
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      sidebar: false
    }
  },
    {
      path: '',
      pathMatch: 'full',
      component: HomeViewComponent,
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
