import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent {
  @Input() category: Category;
  @Input() collapsed: boolean;
  @Input() alwaysShow: boolean;
  @Output() noteClicked = new EventEmitter<number>();
  @Output() categoryClicked = new EventEmitter<number>();
  @Output() deleteCategoryClicked = new EventEmitter<number>();

  constructor() { }

}
