import { Component, OnInit } from '@angular/core';
import * as Categories from '../../store/actions/categories';
import * as Notes from '../../store/actions/notes';
import * as Shares from '../../store/actions/shares';
import * as fromNotes from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs/Observable';
import { LayoutService } from '../../../core/layout.service';
import { Note } from '../../models/note.model';
import { NotesService } from '../../notes.service';
import { Router } from '@angular/router';
import * as routerActions from '../../../store/router-actions';

@Component({
  selector: 'app-category-list-view',
  templateUrl: './category-list-view.component.html',
  styleUrls: ['./category-list-view.component.scss']
})
export class CategoryListViewComponent implements OnInit {
  public categories: Observable<Category[]>;
  public notes: Observable<Note[]>;

  public categoriesLoaded: Observable<boolean>;
  public notesLoaded: Observable<boolean>;

  public categoriesCollapsed: Observable<{}>;

  public selectedNote: Observable<Note>;

  public categoriesWithNotes: Observable<Category[]>;
  public categoriesWithNotesTwo: Observable<Category[]>;

  constructor(private store: Store<fromNotes.State>, private layout: LayoutService, private notesService: NotesService, private router: Router) {

    this.categories = this.store.select(fromNotes.getAllCategories);
    this.notes = this.store.select(fromNotes.getAllNotes);

    this.notesLoaded = this.store.select(fromNotes.getNotesLoaded);
    this.categoriesLoaded = this.store.select(fromNotes.getCategoriesLoaded);

    this.categoriesCollapsed = this.store.select(fromNotes.getCategoriesCollapsed);

    this.notesLoaded.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new Notes.Fetch());
      }
    });


    this.categoriesLoaded.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new Categories.Fetch());
      }
    });

    // this.categoriesWithNotes = this.notesService.combineCategoriesNotes(this.categories, this.notes);

    this.selectedNote = this.store.select(fromNotes.getRouteNote);

    this.selectedNote.subscribe(note => {
      if (!note) {
        return this.layout.setTitle('Categories');
      }

      this.layout.setTitle(note.title);
    });

    this.categoriesWithNotes = this.notesService.categoriesWithNotes;
  }

  ngOnInit() {
  }

  selectNote(id: number) {
    this.store.dispatch(new routerActions.Go({ path: ['/notes', id] }));
  }

  toggleCategory(id: number) {
    this.store.dispatch(new Categories.ToggleCategory(id));
  }


  deleteNote(noteId) {
    this.layout.openConfirmationDialog({ title: 'Delete Note', content: 'Are you sure you want to delete this note?'}).subscribe(result => {
      if (!result) { return; }
      this.store.dispatch(new Notes.DeleteNote(noteId));
    });
  }

  shareNote(noteId) {
    this.store.dispatch(new Shares.CreateShare(noteId));
  }
}
