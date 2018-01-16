import { Action } from '@ngrx/store';
import { Note } from '../../models/note.model';

export enum NotesActionTypes {
  Select = '[Notes] Select',
  Fetch = '[Notes] Fetch',
  FetchSuccess = '[Notes] Fetch Success',
  FetchFailure = '[Notes] Fetch Failure',
  AddNote = '[Notes] Add Note',
  AddNoteSuccess = '[Notes] Add Note Success',
  AddNoteFailure = '[Notes] Add Note Failure',
  UpdateNote = '[Notes] Update Note',
  UpdateNoteSuccess = '[Notes] Update Note Success',
  UpdateNoteFailure = '[Notes] Update Note Failure',
  DeleteNote = '[Notes] Delete Note',
  DeleteNoteSuccess = '[Notes] Delete Note Success',
  DeleteNoteFailure = '[Notes] Delete Note Failure',
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


export class UpdateNote implements Action {
  readonly type = NotesActionTypes.UpdateNote;
  constructor(public payload: Note) { }
}

export class UpdateNoteSuccess implements Action {
  readonly type = NotesActionTypes.UpdateNoteSuccess;
  constructor(public payload: Note) { }
}

export class UpdateNoteFailure implements Action {
  readonly type = NotesActionTypes.UpdateNoteFailure;
  constructor(public payload: string) { }
}


export class DeleteNote implements Action {
  readonly type = NotesActionTypes.DeleteNote;
  constructor(public payload: number) { }
}

export class DeleteNoteSuccess implements Action {
  readonly type = NotesActionTypes.DeleteNoteSuccess;
  constructor(public payload: number) { }
}

export class DeleteNoteFailure implements Action {
  readonly type = NotesActionTypes.DeleteNoteFailure;
  constructor(public payload: string) { }
}


export type NotesActions =
Fetch |
FetchSuccess |
FetchFailure |
Select |
AddNote |
AddNoteSuccess |
AddNoteFailure |
UpdateNote |
UpdateNoteSuccess |
UpdateNoteFailure |
DeleteNote |
DeleteNoteSuccess |
DeleteNoteFailure;
