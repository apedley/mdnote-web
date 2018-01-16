
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { NotesService } from '../../notes.service';

import {
  CategoriesActionTypes,
  Fetch,
  FetchSuccess,
  FetchFailure
} from '../actions/categories';
import { Category } from 'app/notes/models/category.model';


@Injectable()
export class CategoriesEffects {

  @Effect()
  fetchCategories: Observable<Action> = this.actions.ofType(CategoriesActionTypes.Fetch).pipe(
    switchMap((action: Fetch) => {
      return this.notes.fetchCategories();
    }),
    map((categories) => {
      return new FetchSuccess(categories);
    }),
    catchError((err) => of(new FetchFailure(err.error)))
  );

  constructor(private actions: Actions, private notes: NotesService) { }
}
