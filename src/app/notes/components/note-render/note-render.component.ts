import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-render',
  templateUrl: './note-render.component.html',
  styleUrls: ['./note-render.component.scss']
})
export class NoteRenderComponent implements OnInit {
  @Input() note: Note;
  @Output() deleteNoteClicked = new EventEmitter<number>();
  @Output() editNoteClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  deleteNote(noteId) {
    this.deleteNoteClicked.emit(noteId);
  }
  editNote(noteId) {
    this.editNoteClicked.emit(noteId);
  }
}
