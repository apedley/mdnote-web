import { Component, OnInit } from '@angular/core';
import * as Categories from '../../store/actions/categories';
import * as fromNotes from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-list-view',
  templateUrl: './category-list-view.component.html',
  styleUrls: ['./category-list-view.component.scss']
})
export class CategoryListViewComponent implements OnInit {
  public categories: Observable<Category[]>;

  constructor(private store: Store<fromNotes.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new Categories.Fetch());

    this.categories = this.store.select(fromNotes.getAllCategories);
  }

  submitAuthForm() {
  }

}
