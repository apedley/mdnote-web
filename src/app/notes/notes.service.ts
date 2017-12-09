import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Category } from './category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class NotesService {

  constructor(private httpClient: HttpClient) { }

  private _categories: Category[] = [];
  public categorySubscription = new ReplaySubject<Category[]>();

  private _selectedCategorySubject: ReplaySubject<Category> = new ReplaySubject<Category>();
  public readonly selectedCategory: Observable<Category> = this._selectedCategorySubject.asObservable();


  getCategories() {
    const url = 'http://localhost:3030/categories';

    return this.httpClient.get<[Category]>(url, {
      headers: new HttpHeaders().set('Authorization', `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.vkzuR0AkSP-4cEqKzlCnbJdISIHCb5ZOnXiSbdgDiQg`)
    }).subscribe(response => {

      const uncategorized = {
        name: 'Uncategorized',
        id: null
      };

      this._categories = [uncategorized, ...response];
      this.categorySubscription.next(this._categories.slice());
    });
  }

  selectCategory(category: Category) {
    this._selectedCategorySubject.next({ ...category });
  }

}
