import { Category } from '../../category.model';
import {
  Component,
  EventEmitter,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'app-category-list-item',
  template: `
  <mat-list-item class="app-category">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{ category.name }}</h4>
    <p mat-line>{{ category.description }}</p>
  </mat-list-item>
  `,
  styles: [`

  .app-category {
    cursor: pointer;
  }
  `]
})

export class CategoryListItemComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit() {
  }

}
