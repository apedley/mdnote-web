import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as notesActions from '../actions/notes';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ApiService } from '../../../core/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';


@Injectable()
export class NoteEffects {

  @Effect()
  loadNotes: Observable<Action> = this.actions.ofType(notesActions.LOAD).pipe(
    switchMap((action) => {
      return this.api.getAllNotes();
    }),
    map((noteData) => {
      return {
        type: notesActions.LOAD_SUCCESS,
        payload: noteData
      };
    }),
    catchError(error => of(new notesActions.LoadFail(error)))
  );


  @Effect()
  createNote = this.actions.ofType(notesActions.CREATE).pipe(
    switchMap((action: notesActions.Create) => {
      return this.api.createNote(action.payload);
    }),
    map((note) => {
      return {
        type: notesActions.EDIT_SUCCESS,
        payload: note
      };
    }),
    catchError(error => of(new notesActions.CreateFail(error)))
  );

  @Effect()
  editNote = this.actions.ofType(notesActions.EDIT).pipe(
    switchMap((action: notesActions.Edit) => {
      return this.api.editNote(action.noteId, action.payload);
    }),
    map((note) => {
      return {
        type: notesActions.EDIT_SUCCESS,
        payload: note
      };
    }),
    catchError(error => of(new notesActions.EditFail(error)))
  );

  @Effect({ dispatch: false })
  editNoteSuccess = this.actions.ofType(notesActions.EDIT_SUCCESS).pipe(
    map((action: notesActions.EditSuccess) => {
      this.router.navigate(['/notes', action.payload.id]);
    })
  );

  @Effect()
  deleteNote = this.actions.ofType(notesActions.DELETE).pipe(
    switchMap((action: notesActions.Delete) => {
      return this.api.deleteNote(action.noteId);
    }),
    map((rows) => {
      if (rows === 0) {
        return {
          type: notesActions.DELETE_FAIL
        };
      }
      return {
        type: notesActions.DELETE_SUCCESS
      };
    })
  );

  @Effect({ dispatch: false })
  loadFail = this.actions.ofType(notesActions.LOAD_FAIL).pipe(
    map((action: notesActions.LoadFail) => {
      if (action.payload.error && action.payload.error === 'Unauthorized') {
        this.auth.signout();
      }
    })
  );

  @Effect()
  search = this.actions.ofType(notesActions.SEARCH).pipe(
    switchMap((action: notesActions.Search) => {
      return this.api.searchNotes(action.searchString);
    }),
    map((rows) => {
      return {
        type: notesActions.SEARCH_SUCCESS,
        notes: rows
      };
    }),
    catchError(error => of(new notesActions.SearchFail(error)))
  );

  @Effect()
  loadShare = this.actions.ofType(notesActions.LOAD_SHARE).pipe(
    switchMap((action: notesActions.LoadShare) => {
      return this.api.loadShare(action.url);
    }),
    map((result) => {
      return {
        type: notesActions.LOAD_SHARE_SUCCESS,
        share: result
      };
    }),
    catchError(error => of(new notesActions.LoadShareFail(error)))
  );

  constructor(private actions: Actions, private api: ApiService, private router: Router, private auth: AuthService) { }
}
