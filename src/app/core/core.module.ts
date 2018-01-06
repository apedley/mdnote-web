import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { SidebarContainerComponent } from './containers/sidebar/sidebar-container.component';
import { UserInputDialogComponent } from './components/user-input-dialog.component';
import { LayoutService } from './layout.service';
import { NotesModule } from '../notes/notes.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppViewComponent } from './containers/app-view/app-view.component';
import { ApiInterceptor } from '../shared/api.interceptor';
import { SingleViewLayoutComponent } from './containers/single-view-layout/single-view-layout.component';
import { SidebarLayoutComponent } from './containers/sidebar-layout/sidebar-layout.component';


const Components = [
  HeaderComponent,
  SidebarComponent,
  UserInputDialogComponent,
  ConfirmationDialogComponent,
  SidebarContainerComponent,
  AppViewComponent,
  SingleViewLayoutComponent,
  SidebarLayoutComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: Components,
  declarations: Components,
  entryComponents: [
    UserInputDialogComponent,
    ConfirmationDialogComponent
  ],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [ApiService, LayoutService],
    };
  }
}
