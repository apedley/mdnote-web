import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs/Observable';

import * as Categories from '../../store/actions/categories';
import * as Notes from '../../store/actions/notes';
import * as fromNotes from '../../store/reducers';
import { Store } from '@ngrx/store';
import { LayoutService } from '../../../core/layout.service';
import { Note } from '../../models/note.model';
import * as routerActions from '../../../store/router-actions';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {

  public selectedCategory: Observable<Category>;
  public selectedCategoryId: number;
  public selectedNote: Observable<Note>;
  public notesLoaded: Observable<boolean>;

  public categories: Observable<Category[]>;
  public notes: Observable<Note[]>;
  public categoriesWithNotes: Observable<Category[]>;

  constructor(private store: Store<fromNotes.State>, private layout: LayoutService, public notesService: NotesService) {

    this.selectedCategory = this.store.select(fromNotes.getRouteCategory);


    this.selectedCategory.subscribe(cat => {
      if (!cat) { this.selectedCategoryId = null; return; }
      this.selectedCategoryId = cat.id;

      this.layout.setTitle(`${cat.name}`);
    });
    this.selectedNote = this.store.select(fromNotes.getRouteNote);


  }

  categoryClicked(event) {
  }


  selectNote(id: number) {
    this.store.dispatch(new routerActions.Go({ path: ['/notes/categories', this.selectedCategoryId, 'notes', id] }));
  }

  deleteNote(noteId) {
    this.layout.openConfirmationDialog({ title: 'Delete Note', content: 'Are you sure you want to delete this note?'}).subscribe(result => {
      if (!result) { return; }
      this.store.dispatch(new Notes.DeleteNote(noteId));
    });
  }

  deleteCategory(categoryId) {
    this.layout.openConfirmationDialog({ title: 'Delete Category', content: 'Are you sure you want to delete this category?'}).subscribe(result => {
      if (!result) { return; }
      this.store.dispatch(new Categories.DeleteCategory(categoryId));
    });
  }
}
