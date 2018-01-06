import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as category from './store/actions/category';
import * as notes from './store/actions/notes';
import * as fromNotes from './store/reducers/index';
import { Category } from './models/category.model';
import { Note } from './models/note.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from 'app/auth/auth.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/first';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class NotesService {
  categories: Observable<Category[]>;
  notes: Observable<Note[]>;

  categoriesLoaded: Observable<boolean>;
  categoriesLoadedSubscription: Subscription;

  constructor(private store: Store<fromNotes.State>) {
    this.categoriesLoaded = store.select(fromNotes.getCategoriesLoaded);

    this.categoriesLoadedSubscription = this.categoriesLoaded.subscribe(loaded => {
      // debugger;
      if (!loaded) {
        this.loadCategoriesAndNotes();
      }
    });
    this.categories = store.select(fromNotes.getAllCategories);
    this.notes = store.select(fromNotes.getAllNotes);
  }

  loadCategories() {
    this.store.dispatch(new category.Load());
  }
  loadCategoriesAndNotes() {

    this.store.dispatch(new category.Load());
    this.store.dispatch(new notes.Load());
  }


  getCategoriesWithNotes() {
    return Observable.combineLatest(this.categories, this.notes, (selectedCategories, selectedNotes) => {

      selectedCategories.forEach(cat => {
        cat.notes = selectedNotes.filter(note => {
          return note.categoryId === cat.id;
        });
      });


      const uncategorizedNotes = selectedNotes.filter(note => {
        return note.categoryId === null;
      });


      if (uncategorizedNotes.length === 0) {
        return selectedCategories;
      }

      const uncategorizedCategory = {
        id: '0',
        name: 'Uncategorized',
        notes: uncategorizedNotes
      };

      const newCategories = [...selectedCategories, uncategorizedCategory];

      return newCategories;
    });
  }

  getCategoryWithNotes(categoryId: number) {
    return Observable.combineLatest(this.categories, this.notes, (selectedCategories, selectedNotes) => {

      if (categoryId === 0) {

        const uncategorizedNotes = selectedNotes.filter(note => {
          return note.categoryId === null;
        });

        return {
          id: '0',
          name: 'Uncategorized',
          notes: uncategorizedNotes
        };
      }

      selectedCategories = selectedCategories.filter(selectedCategory => {
        return selectedCategory.id + '' === categoryId + '';
      });

      selectedCategories.forEach(cat => {
        cat.notes = selectedNotes.filter(note => {
          return note.categoryId === cat.id;
        });
      });

      return selectedCategories[0];
    });
  }

  selectNote(id) {
    this.store.dispatch(new notes.Select(id));
  }

  deselectNote() {
    this.store.dispatch(new notes.Deselect());
  }

  getSelectedNote() {
    return this.store.select(fromNotes.getSelectedNote);
  }

  createNote(noteData) {
    return this.store.dispatch(new notes.Create(noteData));
  }

  editNote(noteId: number, noteData: Note) {
    return this.store.dispatch(new notes.Edit(noteId, noteData));
  }

  selectCategory(id) {
    this.store.dispatch(new category.Select(id));
  }

  getSelectedCategory() {
    return this.store.select(fromNotes.getSelectedCategory);
  }

  deleteNote(noteId) {
    return this.store.dispatch(new notes.Delete(noteId));
  }

  createCategory(name: string) {
    return this.store.dispatch(new category.Create(name));
  }

  deleteCategory(categoryId) {
    return this.store.dispatch(new category.Delete(categoryId));
  }

  getRouterSelectedNote() {
    return this.store.select(fromNotes.getRouteNote);
  }

  getShare(url: string) {
    return this.store.dispatch(new notes.LoadShare(url));
  }

  selectShare() {
    return this.store.select(fromNotes.selectShare);
  }
}
