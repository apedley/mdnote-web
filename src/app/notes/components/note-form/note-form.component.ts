import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  @Input() categories: Observable<Category[]>;
  @Input() initialData: Observable<Note>;


  @Output() formSubmitted = new EventEmitter<Note>();
  @Output() bodyChanged = new EventEmitter<string>();
  @Output() newCategory = new EventEmitter<void>();

  noteForm: FormGroup;
  formLoading = false;

  existingNoteId: number;


  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: ['0']
    });


    if (!this.initialData) {
      return;
    }

    this.initialData.subscribe((note) => {
      if (!note) { return; }
      this.existingNoteId = note.id;
      this.noteForm.controls['title'].setValue(note.title);
      this.noteForm.controls['body'].setValue(note.body);
      this.bodyChanged.emit(note.body);
      this.noteForm.controls['categoryId'].setValue(note.categoryId);
    });
  }


  submitForm() {

    const noteData: Note = {
      title: String(this.noteForm.value['title']),
      body: String(this.noteForm.value['body']),
      categoryId: parseInt(this.noteForm.value['categoryId'], 10)
    };

    if (this.existingNoteId) {
      noteData.id = this.existingNoteId;
    }

    this.formSubmitted.emit(noteData);
  }

  newCategoryClicked(event) {
    event.preventDefault();
    this.newCategory.emit();
  }

}
