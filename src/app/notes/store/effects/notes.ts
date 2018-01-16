
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
  Fetch, FetchSuccess, FetchFailure,
  AddNote, AddNoteSuccess, AddNoteFailure,
  UpdateNote, UpdateNoteSuccess, UpdateNoteFailure,
  DeleteNote, DeleteNoteSuccess, DeleteNoteFailure
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
      return new AddNoteSuccess(note);
    }),
    catchError((err) => of(new AddNoteFailure(err.error)))
  );

  @Effect()
  addNoteSuccess: Observable<Action> = this.actions.ofType(NotesActionTypes.AddNoteSuccess).pipe(
    map((action: AddNoteSuccess) => {
      return new routerActions.Go({ path: ['/notes', action.payload.id] });
    })
  );

  @Effect()
  updateNote: Observable<Action> = this.actions.ofType(NotesActionTypes.UpdateNote).pipe(
    switchMap((action: UpdateNote) => {
      return this.notes.updateNote(action.payload);
    }),
    map((note: Note) => {
      return new UpdateNoteSuccess(note);
    }),
    catchError((err) => of(new UpdateNoteFailure(err.error)))
  );

  @Effect()
  updateNoteSuccess: Observable<Action> = this.actions.ofType(NotesActionTypes.UpdateNoteSuccess).pipe(
    map((action: UpdateNoteSuccess) => {
      return new routerActions.Go({ path: ['/notes', action.payload.id] });
    })
  );
  @Effect()
  deleteNote = this.actions.ofType(NotesActionTypes.DeleteNote).pipe(
    switchMap((action: DeleteNote) => {
      return this.notes.deleteNote(action.payload);
    }),
    map((noteId: number) => {
      return new DeleteNoteSuccess(noteId);
    }),
    catchError((err) => of(new DeleteNoteFailure(err.error)))
  );

  @Effect()
  deleteNoteSuccess: Observable<Action> = this.actions.ofType(NotesActionTypes.DeleteNoteSuccess).pipe(
    map((action: DeleteNoteSuccess) => {
      return new routerActions.Go({ path: ['/notes'] });
    })
  );

  constructor(private actions: Actions, private notes: NotesService) { }
}
