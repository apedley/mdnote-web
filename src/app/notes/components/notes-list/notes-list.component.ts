import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-notes-list',
  template: `
  <table class="notes-list">
    <tr *ngFor="let note of notes; let i = index" (click)="clickNote(note)" [class.alt]="i % 2 === 0">
      <td>{{ note.title }}</td>
      <td>{{ note.body.substr(0, 80) }}</td>
      <td class="date">{{ note.updated_at | date }}</td>
    </tr>
  </table>
`,
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input() notes: Note[];


  @Output() noteClicked = new EventEmitter<Note>();

  notesShown = true;

  constructor() { }

  ngOnInit() {
  }

  clickNote(note) {
    this.noteClicked.emit(note);
  }

}
