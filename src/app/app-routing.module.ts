import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { SingleViewLayoutComponent } from './core/containers/single-view-layout/single-view-layout.component';
import { NotFoundViewComponent } from './core/containers/not-found-view/not-found-view.component';
import { WelcomeViewComponent } from './core/containers/welcome-view/welcome-view.component';
import { UnauthGuard } from './auth/unauth.guard';

const routes: Routes = [
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule'
  },
  {
    path: 's/:shareUrl',
    redirectTo: 'notes/s/:shareUrl'
  },
  {
    path: '',
    component: SingleViewLayoutComponent,
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WelcomeViewComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundViewComponent
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {useHash: false})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
