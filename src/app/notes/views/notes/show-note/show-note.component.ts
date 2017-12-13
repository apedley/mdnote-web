import { LayoutService } from '../../../../core/layout.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../../../models/category.model';
import { Note } from '../../../models/note.model';
import { NotesService } from '../../../notes.service';
@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {
  note: Observable<Note>;
  category: Observable<Category>;

  noteId: number;

  constructor(private notesService: NotesService, private route: ActivatedRoute, public router: Router, private layoutService: LayoutService) {
    this.noteId = parseInt(this.route.snapshot.paramMap.get('noteId'), 10);
    this.note = this.notesService.getRouterSelectedNote();
    // this.notesService.selectNote(this.route.snapshot.paramMap.get('noteId'));
    // this.note = this.notesService.getSelectedNote();
    this.note.subscribe(note => {
      if (note && !note.categoryId) {
        this.category = this.notesService.getCategoryWithNotes(0);
      }
      if (note && note.categoryId) {
        this.notesService.selectCategory(note.categoryId);
        this.category = this.notesService.getCategoryWithNotes(parseInt(note.categoryId, 10));
      }

    });
    this.notesService.loadCategoriesAndNotes();
  }

  ngOnInit() {
  }

  deleteNote(noteId) {
    this.layoutService.openConfirmationDialog({ title: 'Delete Note', content: 'Are you sure you want to delete this note?'}).subscribe(result => {
      if (!result) { return; }
      this.notesService.deleteNote(noteId);
    });
  }

  clickedNote(note) {
    this.noteId = note.id;
    this.notesService.selectNote(note.id);
    this.router.navigate(['/notes', note.id]);
  }
}
