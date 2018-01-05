import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { InputDialog, ConfirmationDialog } from './models/dialog.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from './store/layout.reducers';
import * as fromRoot from '../reducers';
import * as layout from './store/layout.actions';
import * as fromNotes from '../notes/store/reducers';
import * as notesActions from '../notes/store/actions/notes';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserInputDialogComponent } from './components/user-input-dialog.component';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LayoutService {


  constructor(private layoutStore: Store<fromLayout.State>, private notesStore: Store<fromNotes.State>, public dialog: MatDialog) { }

  openUserInputDialog(dialog: InputDialog) {

    const dialogRef = this.dialog.open(UserInputDialogComponent, {
      width: '250px',
      data: { title: dialog.title, content: dialog.content, response: dialog.response }
    });

    return dialogRef.afterClosed();
  }

  openConfirmationDialog(dialog: ConfirmationDialog) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { title: dialog.title, content: dialog.content }
    });

    return dialogRef.afterClosed();
  }

  getSidebarOpen(): Observable<boolean> {
    return this.layoutStore.select(fromRoot.getSidebarOpen);
  }

  toggleSidebar() {
    this.layoutStore.dispatch(new layout.ToggleSidebar());
  }

  closeSidebar() {
    this.layoutStore.dispatch(new layout.CloseSidebar());
  }

  searchFromToolbar(searchString: string) {
    this.notesStore.dispatch(new notesActions.Search(searchString));
  }
}
