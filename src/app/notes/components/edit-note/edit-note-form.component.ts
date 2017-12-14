import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category.model';
import { Note } from '../../models/note.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-note-form',
  template: `
    <form [formGroup]="noteForm" (ngSubmit)="submitForm()">
      <mat-form-field class="full-width">
        <input matInput formControlName="title" placeholder="Title">
      </mat-form-field>
      <mat-form-field class="full-width">
        <textarea matInput formControlName="body" rows="30" placeholder="Body" (ngModelChange)="changeBody($event)"></textarea>
      </mat-form-field>
      <mat-form-field>
        <mat-select formControlName="categoryId" placeholder="Category">
          <mat-option>
            Uncategorized
          </mat-option>
          <mat-option *ngFor="let category of categories | async" [value]="category.id">
            {{ category.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <button mat-button (click)="newCategoryClicked($event)">New Category</button>

      <div>
        <button mat-raised-button color="primary" [disabled]="noteForm.invalid || formLoading">
          {{ formLoading ? 'Loading..' : 'Submit' }}
        </button>
      </div>
    </form>
  `,
  styles: ['.full-width { width: 100%; }']
})
export class EditNoteFormComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
  @Output() bodyChanged = new EventEmitter<string>();
  @Output() newCategory = new EventEmitter<boolean>();
  @Input() categories: Category[];
  @Input() initialData: Observable<Note>;

  noteForm: FormGroup;
  formLoading = false;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: ['']
    });

    if (!this.initialData) {
      return;
    }
    this.initialData.subscribe((note) => {
      if (!note) { return; }
      this.noteForm.controls['title'].setValue(note.title);
      this.noteForm.controls['body'].setValue(note.body);
      this.noteForm.controls['categoryId'].setValue(note.categoryId);

    });
  }

  submitForm() {
    this.formLoading = true;
    this.formSubmitted.emit(this.noteForm.value);
  }

  changeBody(body) {
    this.bodyChanged.emit(body);
  }

  newCategoryClicked(event: Event) {
    event.preventDefault();
    this.newCategory.emit(true);
  }

}
