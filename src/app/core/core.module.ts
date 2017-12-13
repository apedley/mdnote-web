import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { SidebarContainerComponent } from './containers/sidebar/sidebar-container.component';
import { UserInputDialogComponent } from './components/user-input-dialog.component';
import { LayoutService } from './layout.service';
import { NotesModule } from '../notes/notes.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { ApiService } from './api.service';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    UserInputDialogComponent,
    ConfirmationDialogComponent,
    SidebarContainerComponent
  ],
  entryComponents: [
    UserInputDialogComponent,
    ConfirmationDialogComponent
  ],
  providers: [
    ApiService,
    LayoutService
  ]
})
export class CoreModule { }
