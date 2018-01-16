import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Category } from './models/category.model';
import { Note } from './models/note.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Store } from '@ngrx/store';
import * as fromNotes from './store/reducers';

@Injectable()
export class NotesService {


  constructor(private api: ApiService) {
  }

  fetchCategories() {
    return this.api.get<Category[]>('/categories', true);
  }

  fetchNotes() {
    return this.api.get<Note[]>('/notes', true);
  }

  addNote(note: Note) {
    if (note.categoryId === 0) {
      note.categoryId = null;
    }

    const cleanNoteData = this._removeInvalidKeys(note);
    return this.api.post('/notes', cleanNoteData, true);
  }

  updateNote(note: Note) {
    const noteId = note.id;

    if (note.categoryId === 0) {
      note.categoryId = null;
    }

    const cleanNoteData = this._removeInvalidKeys(note);

    return this.api.patch(`/notes/${noteId}`, cleanNoteData, true);
  }

  deleteNote(noteId: number) {
    return this.api.delete(`/notes/${noteId}`, true);
  }

  addCategory(category: Category) {
    const cleanCategoryData = this._removeInvalidKeys(category);
    return this.api.post('/categories', cleanCategoryData, true);
  }

  deleteCategory(categoryId: number) {
    return this.api.delete(`/categories/${categoryId}`, true);
  }

  combineCategoriesNotes($categories: Observable<Category[]>, $notes: Observable<Note[]>): Observable<Category[]> {
    return Observable.combineLatest($categories, $notes, (categories, notes): Category[] => {

      categories.forEach(cat => {
        cat.notes = notes.filter(note => {
          return note.categoryId === cat.id;
        });
      });


      const uncategorizedNotes = notes.filter(note => {
        return note.categoryId === null;
      });

      if (uncategorizedNotes.length === 0) {
        return categories;
      }


      const uncategorizedCategory = {
        id: 0,
        name: 'Uncategorized',
        notes: uncategorizedNotes
      };

      const newCategories = [...categories, uncategorizedCategory];

      return newCategories;
    });
  }

  private _removeInvalidKeys(dataObject: any) {
    return Object.keys(dataObject).reduce((prev, key) => {
      if (dataObject[key] && dataObject[key] !== 'null') {
        prev[key] = dataObject[key];
      }
      return prev;
    }, {});
  }

}
