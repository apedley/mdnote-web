import * as fromLayout from './layout.reducers';
import * as layout from './layout.actions';

import { InputDialog } from '../models/dialog.model';

describe('LayoutReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromLayout;
      const action = {} as any;
      const state = fromLayout.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });


  describe('OPEN_SIDEBAR action', () => {
    it('should set sidebar to open', () => {
      const { initialState } = fromLayout;
      const action = new layout.OpenSidebar();
      const state = fromLayout.reducer(initialState, action);

      expect(state.sidebarOpen).toEqual(true);
    });
  });

  describe('CLOSE_SIDEBAR action', () => {
    it('should set sidebar to closed', () => {
      const { initialState } = fromLayout;
      const action = new layout.CloseSidebar();
      const state = fromLayout.reducer(initialState, action);

      expect(state.sidebarOpen).toEqual(false);
    });
  });

  describe('TOGGLE_SIDEBAR action', () => {
    it('should toggle sidebar to open and close', () => {
      const { initialState } = fromLayout;
      const action = new layout.ToggleSidebar();
      const state = fromLayout.reducer(initialState, action);

      expect(state.sidebarOpen).toEqual(true);

      const secondState = fromLayout.reducer(state, action);

      expect(secondState.sidebarOpen).toEqual(false);
    });
  });

  describe('SET_TITLE action', () => {
    it('shoud update the title', () => {
      const { initialState } = fromLayout;
      const action = new layout.SetTitle('title');
      const state = fromLayout.reducer(initialState, action);

      expect(state.title).toEqual('title');
    });
  });

  const dialog: InputDialog = {
    title: 'title',
    content: 'content',
    response: null
  };


  describe('OPEN_INPUT_DIALOG action', () => {
    it('should open input dialog', () => {
      const { initialState } = fromLayout;
      const action = new layout.OpenInputDialog(dialog);
      const state = fromLayout.reducer(initialState, action);

      expect(state.inputDialogOpen).toEqual(true);
      expect(state.inputDialog).toEqual(dialog);
    });
  });

  describe('INPUT_DIALOG_FINISHED action', () => {
    it('should open input dialog', () => {
      const { initialState } = fromLayout;
      const action = new layout.OpenInputDialog(dialog);
      const state = fromLayout.reducer(initialState, action);

      const finishedAction = new layout.InputDialogFinished('none');

      const stateTwo = fromLayout.reducer(state, finishedAction);

      expect(stateTwo.inputDialogOpen).toEqual(false);
      expect(stateTwo.inputDialog).toEqual(null);
    });
  });
});
