import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../shared/material.module';
import { ListCategoriesComponent } from './views/categories/list-categories/list-categories.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { EditNoteFormComponent } from './components/edit-note/edit-note-form.component';
import { EditNotePreviewComponent } from './components/edit-note/edit-note-preview.component';
import { CategoryEffects } from './store/effects/category.effects';
import { NoteEffects } from './store/effects/note.effects';
import { CoreModule } from 'app/core/core.module';
import { AuthModule } from 'app/auth/auth.module';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteRenderComponent } from './components/note-render/note-render.component';
import { CreateNoteComponent } from './views/notes/create-note/create-note.component';

import { MarkdownModule } from 'ngx-markdown';
import { EditNoteComponent } from './views/notes/edit-note/edit-note.component';
import { ShowCategoryComponent } from './views/categories/show-category/show-category.component';
import { ShowNoteComponent } from './views/notes/show-note/show-note.component';
import { ShowShareComponent } from './views/notes/show-share/show-share.component';
import { SidebarLayoutComponent } from '../core/containers/sidebar-layout/sidebar-layout.component';



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
        { path: 'categories/:categoryId', component: ShowCategoryComponent },

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
export class NotesModule { }
