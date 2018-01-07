import { LayoutService } from '../../../../core/layout.service';
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'app/notes/notes.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../../models/category.model';
import { Note } from '../../../models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories-view',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  categories: Observable<Category[]>;
  selectedNote: Observable<Note>;

  constructor(private notesService: NotesService, public router: Router, private layoutService: LayoutService) {

    this.notesService.loadCategoriesAndNotes();

  }

  ngOnInit() {
    this.categories = this.notesService.getCategoriesWithNotes();
    this.selectedNote = this.notesService.getSelectedNote();
  }

  clickedNote(note) {
    this.notesService.selectNote(note.id);
    this.router.navigate(['/notes', note.id]);
  }

  deleteNote(noteId) {
    this.layoutService.openConfirmationDialog({ title: 'Delete Note', content: 'Are you sure you want to delete this note?'}).subscribe(result => {
      if (!result) { return; }
      this.notesService.deleteNote(noteId);
    });
  }

  newCategory() {
    this.layoutService.openUserInputDialog({ title: 'New Category', content: 'Name for new Category?', response: null}).subscribe(result => {
      if (!result) { return; }
      this.notesService.createCategory(result);
    });
  }

  deleteCategory(categoryId) {
    this.layoutService.openConfirmationDialog({ title: 'Delete Category', content: 'Are you sure you want to delete this category?'}).subscribe(result => {
      if (!result) { return; }
      this.notesService.deleteCategory(categoryId);
    });
  }

}
