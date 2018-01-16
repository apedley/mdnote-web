import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.scss']
})
export class NoteShowComponent {
  @Input() note: Note;

  @Output() deleteNote = new EventEmitter<number>();
  @Output() shareNote = new EventEmitter<number>();

  constructor() { }


}
