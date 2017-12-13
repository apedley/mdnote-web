// import { Category } from '../../../notes/category.model';
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { NotesService } from '../../../notes/notes.service';
// import { Observable } from 'rxjs/Observable';

// @Component({selector: 'app-home-view', templateUrl: './home-view.component.html', styleUrls: ['./home-view.component.scss']})
// export class HomeViewComponent implements OnInit, OnDestroy {

//   public sidebarOpen = true;

//   public categories: Category[] = [];

//   public selectedCategory: Observable<Category>;

//   fillerContent = Array(50).fill(0);

//   constructor(
//     private notesService: NotesService
//   ) {}


//   ngOnInit() {
//     this.notesService.categoriesSubject.subscribe((newCategories) => {
//       this.categories = newCategories;
//     });
//     this.notesService.getCategories();

//     this.selectedCategory = this.notesService.selectedCategory;

//   }

//   ngOnDestroy() {
//   }

//   categorySelected(category: Category) {
//     this.notesService.selectCategory(category);
//   }
// }
