import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { ApiService } from './api.service';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserInputDialogComponent } from './components/dialogs/user-input-dialog.component';
import { AppViewComponent } from './containers/app-view/app-view.component';
import { SidebarLayoutComponent } from './containers/sidebar-layout/sidebar-layout.component';
import { SidebarContainerComponent } from './containers/sidebar/sidebar-container.component';
import { SingleViewLayoutComponent } from './containers/single-view-layout/single-view-layout.component';
import { LayoutService } from './layout.service';
import { SidebarListItemComponent } from './components/sidebar/sidebar-list-item.component';
import { ShareDialogComponent } from './components/dialogs/share-dialog.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NotFoundViewComponent } from './containers/not-found-view/not-found-view.component';
import { WelcomeViewComponent } from './containers/welcome-view/welcome-view.component';

const Components = [
  HeaderComponent,
  SidebarComponent,
  UserInputDialogComponent,
  ConfirmationDialogComponent,
  ShareDialogComponent,
  SidebarContainerComponent,
  AppViewComponent,
  SingleViewLayoutComponent,
  SidebarLayoutComponent,
  SidebarListItemComponent,
  NotFoundViewComponent,
  WelcomeViewComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClipboardModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: Components,
  declarations: Components,
  entryComponents: [
    UserInputDialogComponent,
    ConfirmationDialogComponent,
    ShareDialogComponent
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
