import { NotesService } from '../../notes.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as categoriesActions from '../actions/category';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ApiService } from '../../../core/api.service';
import { Router } from '@angular/router';


@Injectable()
export class CategoryEffects {

  @Effect()
  loadCategories: Observable<Action> = this.actions.ofType(categoriesActions.LOAD).pipe(
    switchMap((action) => {
      return this.api.getAllCategories();
    }),
    map((categories) => {
      return {
        type: categoriesActions.LOAD_SUCCESS,
        payload: categories
      };
    }),
    catchError(error => of(new categoriesActions.LoadFail(error)))
  );

  @Effect()
  createCategory = this.actions.ofType(categoriesActions.CREATE).pipe(
    switchMap((action: categoriesActions.Create) => {
      return this.api.createCategory(action.payload);
    }),
    map((category) => {
      return {
        type: categoriesActions.CREATE_SUCCESS,
        payload: category
      };
    }),
    catchError(error => of(new categoriesActions.CreateFail(error)))
  );

  @Effect()
  deleteCategory = this.actions.ofType(categoriesActions.DELETE).pipe(
    switchMap((action: categoriesActions.Delete) => {
      return this.api.deleteCategory(action.categoryId);
    }),
    map((rows) => {
      if (rows === 0) {
        return {
          type: categoriesActions.DELETE_FAIL
        };
      }
      this.router.navigate(['/notes']);
      return {
        type: categoriesActions.DELETE_SUCCESS
      };

    })
  );

  constructor(private actions: Actions, private api: ApiService, private router: Router, private notesService: NotesService) { }
}
