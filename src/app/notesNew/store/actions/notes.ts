import { Action } from '@ngrx/store';
import { Note } from '../../models/note.model';

export enum NotesActionTypes {
  AddNote = '[Notes] Add Note',
  AddNoteSuccess = '[Notes] Add Note Success',
  AddNoteFailure = '[Notes] Add Note Failure',
  Select = '[Notes] Select',
  Fetch = '[Notes] Fetch',
  FetchSuccess = '[Notes] Fetch Success',
  FetchFailure = '[Notes] Fetch Failure',
}

export class AddNote implements Action {
  readonly type = NotesActionTypes.AddNote;
  constructor(public payload: Note) { }
}

export class AddNoteSuccess implements Action {
  readonly type = NotesActionTypes.AddNoteSuccess;
  constructor(public payload: Note) { }
}

export class AddNoteFailure implements Action {
  readonly type = NotesActionTypes.AddNoteFailure;
  constructor(public payload: string) { }
}

export class Select implements Action {
  readonly type = NotesActionTypes.Select;
  constructor(public payload: number) { }
}

export class Fetch implements Action {
  readonly type = NotesActionTypes.Fetch;
}

export class FetchSuccess implements Action {
  readonly type = NotesActionTypes.FetchSuccess;
  constructor(public payload: Note[]) { }
}

export class FetchFailure implements Action {
  readonly type = NotesActionTypes.FetchFailure;
  constructor(public payload: string) { }
}

export type NotesActions =
Fetch |
FetchSuccess |
FetchFailure |
Select |
AddNote |
AddNoteSuccess |
AddNoteFailure;
