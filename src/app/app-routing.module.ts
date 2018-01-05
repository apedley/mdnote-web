import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/components/auth/auth.component';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'signup',
    component: AuthComponent,
    data: {
      hideSidebar: true,
      authFunction: 'Sign Up'
    }
  },
  {
    path: 'signin',
    component: AuthComponent,
    data: {
      hideSidebar: true,
      authFunction: 'Sign In'
    }
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/notes',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {useHash: false})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
