import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { ApiService } from './api.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserInputDialogComponent } from './components/user-input-dialog.component';
import { AppViewComponent } from './containers/app-view/app-view.component';
import { SidebarLayoutComponent } from './containers/sidebar-layout/sidebar-layout.component';
import { SidebarContainerComponent } from './containers/sidebar/sidebar-container.component';
import { SingleViewLayoutComponent } from './containers/single-view-layout/single-view-layout.component';
import { LayoutService } from './layout.service';


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
