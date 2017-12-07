import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AppMaterialModule } from '../core/app-material.module';
import { CategoryListItemComponent } from './components/category-list/category-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule
  ],
  declarations: [CategoryListComponent, CategoryListItemComponent],
  providers: [
    NotesService
  ],
  exports: [
    CategoryListComponent
  ]
})
export class NotesModule { }
