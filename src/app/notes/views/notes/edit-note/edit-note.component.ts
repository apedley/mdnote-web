import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../models/category.model';
import { Note } from '../../../models/note.model';
import { NotesService } from '../../../notes.service';
import { LayoutService } from '../../../../core/layout.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  rawBody = '';
  categories: Observable<Category[]>;
  note: Observable<Note>;
  noteId: number;

  constructor(private notesService: NotesService, private route: ActivatedRoute, private layoutService: LayoutService) {
    this.noteId = parseInt(this.route.snapshot.paramMap.get('noteId'), 10);
    this.notesService.selectNote(this.route.snapshot.paramMap.get('noteId'));
    this.note = this.notesService.getSelectedNote();
    this.categories = this.notesService.categories;
    this.notesService.loadCategoriesAndNotes();
  }

  ngOnInit() {
  }

  updatePreview(body: string) {
    this.rawBody = body;
  }

  editNote(noteData: Note) {
    this.notesService.editNote(this.noteId, noteData);
  }

  newCategory() {
    this.layoutService.openUserInputDialog({ title: 'New Category', content: 'Name for new Category?', response: null}).subscribe(result => {
      if (!result) { return; }
      this.notesService.createCategory(result);
    });
  }
}
