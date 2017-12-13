import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../../models/category.model';
import { NotesService } from '../../../notes.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  rawBody = '';
  categories: Observable<Category[]>;

  constructor(private notesService: NotesService) {
    this.categories = this.notesService.categories;
    this.notesService.loadCategories();
  }

  ngOnInit() {
  }

  updatePreview(body: string) {
    this.rawBody = body;
  }

  createNote(noteData) {
    this.notesService.createNote(noteData);
  }
}
