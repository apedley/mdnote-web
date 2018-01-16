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
import { PipesModule } from '../shared/pipes/index';
import { DirectivesModule } from '../shared/directives/index';
import { CategoryViewComponent } from './containers/category-view/category-view.component';
import { CategoryListItemComponent } from './components/category-list/category-list-item/category-list-item.component';
import { SingleViewLayoutComponent } from '../core/containers/single-view-layout/single-view-layout.component';
import { AuthGuard } from '../auth/auth.guard';
import { SharesEffects } from './store/effects/shares';
import { ShareShowComponent } from './components/share-show/share-show.component';
import { ShareViewComponent } from './containers/share-view/share-view.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    PipesModule,
    DirectivesModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([
      {
        path: 's', component: SingleViewLayoutComponent, children: [
          { path: ':shareUrl', component: ShareViewComponent}
        ]},
      {
        path: '', component: SidebarLayoutComponent, children: [
        { path: 'categories/:categoryId', component: CategoryViewComponent },
        { path: 'categories/:categoryId/notes/:noteId', component: CategoryViewComponent },
        { path: 'new', component: ComposeNoteViewComponent },
        { path: ':noteId/edit', component: ComposeNoteViewComponent },
        { path: ':noteId', pathMatch: 'full', component: CategoryListViewComponent },
        { path: '', pathMatch: 'full', component: CategoryListViewComponent },
      ],
      canActivate: [AuthGuard]}
    ]),

    StoreModule.forFeature('notes', reducers),

    EffectsModule.forFeature([CategoriesEffects, NotesEffects, SharesEffects]),
  ],
  declarations: [
    CategoryListViewComponent,
    CategoryListComponent,
    NoteListComponent,
    NoteShowComponent,
    ComposeNoteViewComponent,
    NoteFormComponent,
    NotePreviewComponent,
    CategoryViewComponent,
    CategoryListItemComponent,
    ShareViewComponent,
    ShareShowComponent
  ],
  exports: [],
  providers: [NotesService]
})
export class NotesModule { }
