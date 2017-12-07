import { NotesModule } from './../notes/notes.module';
import { AppMaterialModule } from './app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeViewComponent } from './containers/home-view/home-view.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    NotesModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    HomeViewComponent
  ]
})
export class CoreModule { }
