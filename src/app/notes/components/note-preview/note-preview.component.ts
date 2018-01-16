import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-preview',
  template: `
  <div>
    <h3 *ngIf="title">{{ title }}</h3>
    <markdown [data]="body">
    </markdown>
  </div>
`,
  styles: [`
  `]
})
export class NotePreviewComponent {
  @Input() title: string | null = null;
  @Input() body: string;

  constructor() { }


}
