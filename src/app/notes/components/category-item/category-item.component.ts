import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category.model';
import { Note } from '../../models/note.model';
// <button mat-button color="primary" (click)="editCategory(category.id)">Edit</button>

@Component({
  selector: 'app-category-item',
  template: `
  <div>
    <div class="actions">
      <button mat-button (click)="deleteCategory(category.id)" class="delete-button">Delete</button>
    </div>

    <h3 [routerLink]="['/notes', 'categories', category.id]">
      {{ category.name | titlecase }} <span class="note-count">({{ category.notes.length }})</span>
    </h3>
    <app-notes-list *ngIf="notesShown && category.notes.length > 0" [notes]="category.notes" (noteClicked)="clickNote($event)"></app-notes-list>
  </div>
  `,
  styleUrls: ['category-item-component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: Category;
  @Output() noteClicked = new EventEmitter<Note>();
  @Output() deleteCategoryClicked = new EventEmitter<number>();
  @Output() editCategoryClicked = new EventEmitter<number>();
  notesShown = true;

  constructor() { }

  ngOnInit() {
  }

  toggleNotesDisplay() {
    this.notesShown = !this.notesShown;
  }

  clickNote(note) {
    this.noteClicked.emit(note);
  }

  deleteCategory(id) {
    this.deleteCategoryClicked.emit(id);
  }

  editCategory(id) {
    this.editCategoryClicked.emit(id);
  }
}
