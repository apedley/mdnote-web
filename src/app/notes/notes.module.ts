import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NotesService } from 'app/notes/notes.service';

import { SidebarLayoutComponent } from '../core/containers/sidebar-layout/sidebar-layout.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material.module';
import { CategoryListViewComponent } from './containers/category-list-view/category-list-view.component';
import { CategoriesEffects } from './store/effects/categories';
import { NotesEffects } from './store/effects/notes';
import { reducers } from './store/reducers';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteShowComponent } from './components/note-show/note-show.component';
import { MarkdownModule } from 'ngx-markdown';
import { ComposeNoteViewComponent } from './containers/compose-note-view/compose-note-view.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([
      { path: '', component: SidebarLayoutComponent, children: [
        { path: 'new', component: ComposeNoteViewComponent },
        { path: ':noteId', pathMatch: 'full', component: CategoryListViewComponent },
        { path: '', pathMatch: 'full', component: CategoryListViewComponent },
      ]}
    ]),

    StoreModule.forFeature('notes', reducers),

    EffectsModule.forFeature([CategoriesEffects, NotesEffects]),
  ],
  declarations: [
    CategoryListViewComponent,
    CategoryListComponent,
    NoteListComponent,
    NoteShowComponent,
    ComposeNoteViewComponent,
    NoteFormComponent,
    NotePreviewComponent
  ],
  exports: [],
  providers: [NotesService]
})
export class NotesModule { }
