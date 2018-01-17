import * as Layout from './layout.actions';
import { testEmptyAction, testPayloadAction } from '../../../../testing/action-helpers';
import { InputDialog } from '../models/dialog.model';


describe('Layout Actions', () => {
  describe('Sidebar Actions', () => {

    describe('OpenSidebar', () => {
      it('should create an action', () => {
        testEmptyAction(Layout.OPEN_SIDEBAR, Layout.OpenSidebar);
      });
    });

    describe('CloseSidebar', () => {
      it('should create an action', () => {
        testEmptyAction(Layout.CLOSE_SIDEBAR, Layout.CloseSidebar);
      });
    });

    describe('ToggleSidebar', () => {
      it('should create an action', () => {
        testEmptyAction(Layout.TOGGLE_SIDEBAR, Layout.ToggleSidebar);
      });
    });

  });

  describe('Title Actions', () => {

    describe('SetTitle', () => {
      it('should create an action', () => {
        testPayloadAction(Layout.SET_TITLE, Layout.SetTitle, 'title');
      });
    });

  });

  describe('Dialog Actions', () => {

    describe('OpenInputDialog', () => {
      it('should create an action', () => {
        const dialog = { title: 'title', content: 'content'};
        testPayloadAction(Layout.OPEN_INPUT_DIALOG, Layout.OpenInputDialog, dialog);
      });
    });

    describe('InputDialogFinished', () => {
      it('should create an action', () => {
        const result = '12';

        testPayloadAction(Layout.INPUT_DIALOG_FINISHED, Layout.InputDialogFinished, result);
      });
    });

  });
});


