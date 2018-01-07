import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from 'app/auth/auth.module';
import { CoreModule } from 'app/core/core.module';
import { MarkdownModule } from 'ngx-markdown';

import { SidebarLayoutComponent } from '../core/containers/sidebar-layout/sidebar-layout.component';
import { MaterialModule } from '../shared/material.module';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { EditNoteFormComponent } from './components/edit-note/edit-note-form.component';
import { EditNotePreviewComponent } from './components/edit-note/edit-note-preview.component';
import { NoteRenderComponent } from './components/note-render/note-render.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesService } from './notes.service';
import { CategoryEffects } from './store/effects/category.effects';
import { NoteEffects } from './store/effects/note.effects';
import { reducers } from './store/reducers';
import { ListCategoriesComponent } from './views/categories/list-categories/list-categories.component';
import { ShowCategoryComponent } from './views/categories/show-category/show-category.component';
import { CreateNoteComponent } from './views/notes/create-note/create-note.component';
import { EditNoteComponent } from './views/notes/edit-note/edit-note.component';
import { ShowNoteComponent } from './views/notes/show-note/show-note.component';
import { ShowShareComponent } from './views/notes/show-share/show-share.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: SidebarLayoutComponent, children: [
        { path: '', pathMatch: 'full', component: ListCategoriesComponent },
        { path: 's/:shareUrl', component: ShowShareComponent },
        { path: 'new', component: CreateNoteComponent },
        { path: ':noteId', component: ShowNoteComponent },
        { path: ':noteId/edit', component: EditNoteComponent },
        { path: 'categories/:categoryId', component: ShowCategoryComponent }
      ]},
    ]),
    StoreModule.forFeature('notes', reducers),
    EffectsModule.forFeature([CategoryEffects, NoteEffects]),
  ],
  declarations: [
    ListCategoriesComponent,
    CategoryItemComponent,
    NotesListComponent,
    NoteRenderComponent,
    CreateNoteComponent,
    EditNotePreviewComponent,
    EditNoteFormComponent,
    EditNoteComponent,
    ShowCategoryComponent,
    ShowNoteComponent,
    ShowShareComponent
  ],
  providers: [
    NotesService,

  ],
  exports: [

  ]
})
export class NotesModule {
}
