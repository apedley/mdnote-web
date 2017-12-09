import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input() categories: [Category];
  @Output() categorySelected = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  categoryItemSelected(category) {
    this.categorySelected.emit(category);
  }
}
