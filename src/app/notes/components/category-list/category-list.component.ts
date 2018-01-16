import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  @Input() categories: Category[];
  @Input() collapsed: {};
  @Output() noteClicked = new EventEmitter<number>();
  @Output() categoryClicked = new EventEmitter<number>();
  @Output() deleteCategoryClicked = new EventEmitter<number>();

  constructor() { }
}
