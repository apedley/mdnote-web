
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-notes-list',
  template: `
  <mat-table class="notes-list mat-elevation-z5" [dataSource]="dataSource">

    <ng-container matColumnDef="title">
      <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
      <mat-cell *matCellDef="let note">{{ note.title }}</mat-cell>
    </ng-container>

    <ng-container matColumnDef="preview">
      <mat-header-cell *matHeaderCellDef>Preview</mat-header-cell>
      <mat-cell *matCellDef="let note">{{ note.preview }}</mat-cell>
    </ng-container>

    <ng-container matColumnDef="updated">
      <mat-header-cell *matHeaderCellDef>Updated</mat-header-cell>
      <mat-cell *matCellDef="let note">{{ note.updated_at | date }}</mat-cell>
    </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;" (click)="clickNote(row)"></mat-row>
  </mat-table>
`,
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input() notes: Note[];

  @Output() noteClicked = new EventEmitter<Note>();

  dataSource: MatTableDataSource<Note>;
  displayedColumns = [ 'title', 'preview', 'updated'];
  notesShown = true;

  constructor() {

  }

  ngOnInit() {
    this.notes.forEach(note => {
      note.preview = note.body.substr(0, 70);
    });
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  clickNote(note) {
    this.noteClicked.emit(note);
  }

}



// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Note } from '../../models/note.model';

// @Component({
//   selector: 'app-notes-list',
//   template: `
//   <table class="notes-list">
//     <tr *ngFor="let note of notes; let i = index" (click)="clickNote(note)" [class.alt]="i % 2 === 0">
//       <td>{{ note.title }}</td>
//       <td>{{ note.body.substr(0, 80) }}</td>
//       <td class="date">{{ note.updated_at | date }}</td>
//     </tr>
//   </table>
// `,
//   styleUrls: ['./notes-list.component.scss']
// })
// export class NotesListComponent implements OnInit {
//   @Input() notes: Note[];


//   @Output() noteClicked = new EventEmitter<Note>();

//   notesShown = true;

//   constructor() { }

//   ngOnInit() {
//   }

//   clickNote(note) {
//     this.noteClicked.emit(note);
//   }

// }
