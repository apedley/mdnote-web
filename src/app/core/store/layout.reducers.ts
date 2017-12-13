import { InputDialog } from '../models/dialog.model';
import * as layout from './layout.actions';


export interface State {
  sidebarOpen: boolean;
  inputDialogOpen: boolean;
  inputDialog: InputDialog | null;
}

const initialState: State = {
  sidebarOpen: false,
  inputDialogOpen: false,
  inputDialog: null
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.OPEN_SIDEBAR: {
      return { ...state, sidebarOpen: true };
    }
    case layout.CLOSE_SIDEBAR: {
      return { ...state, sidebarOpen: false };
    }
    case layout.TOGGLE_SIDEBAR: {
      return { ...state, sidebarOpen: !state.sidebarOpen };
    }
    case layout.OPEN_INPUT_DIALOG: {
      return { ...state, inputDialogOpen: true, inputDialog: action.payload };
    }
    case layout.INPUT_DIALOG_FINISHED: {
      return { ...state, inputDialogOpen: false, inputDialog: null };
    }
    default: {
      return state;
    }
  }
}


export const getSidebarOpen = (state: State) => state.sidebarOpen;
