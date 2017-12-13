import { Action } from '@ngrx/store';
import { InputDialog } from '../models/dialog.model';

export const OPEN_SIDEBAR = '[Layout] Open sidebar';
export const CLOSE_SIDEBAR = '[Layout] Close sidebar';

export const OPEN_INPUT_DIALOG = '[Layout] Open input dialog';
export const INPUT_DIALOG_FINISHED = '[Layout] Input dialog finished';

export class OpenSidebar implements Action {
  readonly type = OPEN_SIDEBAR;
}

export class CloseSidebar implements Action {
  readonly type = CLOSE_SIDEBAR;
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
  | OpenInputDialog
  | InputDialogFinished;
