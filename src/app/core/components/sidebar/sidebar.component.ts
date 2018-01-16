import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../notes/models/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() categories: Category[];
  @Output() newCategory = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  constructor() {
  }

  newCategoryClicked() {
    this.newCategory.emit();
  }

  logoutClicked() {
    this.logout.emit();
  }

  ngOnInit() {

  }

}
