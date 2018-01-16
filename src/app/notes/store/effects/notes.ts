
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as routerActions from '../../../store/router-actions';

import { NotesService } from '../../notes.service';

import {
  NotesActionTypes,
  Fetch,
  FetchSuccess,
  FetchFailure,
  AddNote,
  AddNoteSuccess,
  AddNoteFailure
} from '../actions/notes';
import { Note } from 'app/notes/models/note.model';


@Injectable()
export class NotesEffects {

  @Effect()
  fetchNotes: Observable<Action> = this.actions.ofType(NotesActionTypes.Fetch).pipe(
    switchMap((action: Fetch) => {
      return this.notes.fetchNotes();
    }),
    map((notes) => {
      return new FetchSuccess(notes);
    }),
    catchError((err) => of(new FetchFailure(err.error)))
  );


  @Effect()
  addNote: Observable<Action> = this.actions.ofType(NotesActionTypes.AddNote).pipe(
    switchMap((action: AddNote) => {
      return this.notes.addNote(action.payload);
    }),
    map((note: Note) => {
      debugger;
      return new AddNoteSuccess(note);
    }),
    catchError((err) => of(new FetchFailure(err.error)))
  );

  @Effect()
  addNoteSuccess: Observable<Action> = this.actions.ofType(NotesActionTypes.AddNoteSuccess).pipe(
    map((action: AddNoteSuccess) => {
      return new routerActions.Go({ path: ['/notes', action.payload.id] });
    })
  );



  constructor(private actions: Actions, private notes: NotesService) { }
}
