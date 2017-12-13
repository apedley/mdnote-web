import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-edit-note-preview',
  template: `
  <div>
    <h3>{{ title }}</h3>
    <markdown [data]="body">
    </markdown>
  </div>
  `,
  styles: [`

  `]
})
export class EditNotePreviewComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit() {
  }

}
