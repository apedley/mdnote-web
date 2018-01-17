import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { SingleViewLayoutComponent } from './core/containers/single-view-layout/single-view-layout.component';

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
