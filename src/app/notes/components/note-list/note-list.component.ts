import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, OnChanges {
  @Input() notes: Note[];
  @Input() collapsed: boolean;

  @Output() noteClicked = new EventEmitter<number>();

  dataSource: MatTableDataSource<Note>;
  displayedColumns = [ 'title', 'preview', 'updated'];
  notesShown = true;

  constructor() { }


  ngOnInit() {

  }

  ngOnChanges() {

    this.notes.forEach(note => {
      note.preview = note.body.substr(0, 70);
    });
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

}
