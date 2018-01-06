import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleViewLayoutComponent } from './core/containers/single-view-layout/single-view-layout.component';
import { SidebarLayoutComponent } from './core/containers/sidebar-layout/sidebar-layout.component';

const routes: Routes = [
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
