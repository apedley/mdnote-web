import { Category } from '../../../notes/category.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from './../../../notes/notes.service';
import { Observable } from 'rxjs/Observable';

@Component({selector: 'app-home-view', templateUrl: './home-view.component.html', styleUrls: ['./home-view.component.scss']})
export class HomeViewComponent implements OnInit, OnDestroy {

  // @Input() sidebarContent;
  // @Input() mainContent;
  public sidebarOpen = true;

  public categories: Category[] = [];

  public selectedCategory: Observable<Category>;

  fillerContent = Array(50).fill(0);

  constructor(
    private notesService: NotesService
  ) {}

  ngOnInit() {
    this.notesService.categorySubscription.subscribe((newCategories) => {
      this.categories = newCategories;
    });
    this.notesService.getCategories();


    this.selectedCategory = this.notesService.selectedCategory;

    // this.notesService.selectedCategory.subscribe((category) => {
    //   this.selectedCategory = category;
    // });
  }

  ngOnDestroy() {
    this.notesService.categorySubscription.unsubscribe();
  }

  categorySelected(category: Category) {
    this.notesService.selectCategory(category);
  }
}
