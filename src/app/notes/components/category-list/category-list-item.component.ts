import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Category } from '../../category.model';

@Component({
  selector: 'app-category-list-item',
  template: `
  <mat-list-item>
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{ category.name }}</h4>
    <p mat-line>{{ category.description }}</p>
  </mat-list-item>
  `,
  styles: [`
  `]
})
export class CategoryListItemComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit() {
  }

}
