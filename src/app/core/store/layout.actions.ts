import { Action } from '@ngrx/store';
import { InputDialog } from '../models/dialog.model';

export const OPEN_SIDEBAR = '[Layout] Open sidebar';
export const CLOSE_SIDEBAR = '[Layout] Close sidebar';
export const TOGGLE_SIDEBAR = '[Layout] Toggle sidebar';

export const SET_TITLE = '[Layout] Set title';

export const OPEN_INPUT_DIALOG = '[Layout] Open input dialog';
export const INPUT_DIALOG_FINISHED = '[Layout] Input dialog finished';

export class OpenSidebar implements Action {
  readonly type = OPEN_SIDEBAR;
}

export class CloseSidebar implements Action {
  readonly type = CLOSE_SIDEBAR;
}

export class ToggleSidebar implements Action {
  readonly type = TOGGLE_SIDEBAR;
}


export class SetTitle implements Action {
  readonly type = SET_TITLE;
  constructor(public payload: string) {}
}

export class OpenInputDialog implements Action {
  readonly type = OPEN_INPUT_DIALOG;
  constructor(public payload: InputDialog) {}
}

export class InputDialogFinished implements Action {
  readonly type = INPUT_DIALOG_FINISHED;
  constructor(public payload: any) {}
}

export type Actions =
  | OpenSidebar
  | CloseSidebar
  | ToggleSidebar
  | OpenInputDialog
  | InputDialogFinished
  | SetTitle;
