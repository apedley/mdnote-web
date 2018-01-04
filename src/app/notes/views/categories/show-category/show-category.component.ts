import { LayoutService } from '../../../../core/layout.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../../../models/category.model';
import { Note } from '../../../models/note.model';
import { NotesService } from '../../../notes.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {
  category: Observable<Category>;
  categoryId: number;
  selectedNote: Observable<Note>;


  constructor(private notesService: NotesService, private route: ActivatedRoute, public router: Router, private layoutService: LayoutService) {
    this.notesService.loadCategoriesAndNotes();
    this.route.paramMap.subscribe(paramMap => {
      this.categoryId = parseInt(paramMap.get('categoryId'), 10);
      this.notesService.selectCategory(this.categoryId);
      this.category = this.notesService.getCategoryWithNotes(this.categoryId);
    });
  }

  ngOnInit() {
    // this.selectedNote = this.notesService.getSelectedNote();
  }

  clickedNote(note) {
    this.router.navigate(['/notes', note.id]);
    this.notesService.selectNote(note.id);
  }


  deleteNote(noteId) {
    this.layoutService.openConfirmationDialog({ title: 'Delete Note', content: 'Are you sure you want to delete this note?'}).subscribe(result => {
      if (!result) { return; }
      this.notesService.deleteNote(noteId);
    });
  }

  deleteCategory(categoryId) {
    this.layoutService.openConfirmationDialog({ title: 'Delete Category', content: 'Are you sure you want to delete this category?'}).subscribe(result => {
      if (!result) { return; }
      this.notesService.deleteCategory(categoryId);
    });
  }

}
