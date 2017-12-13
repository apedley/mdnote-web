import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { InputDialog, ConfirmationDialog } from './models/dialog.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from './store/layout.reducers';
import * as layout from './store/layout.actions';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserInputDialogComponent } from './components/user-input-dialog.component';


@Injectable()
export class LayoutService {


  constructor(private layoutStore: Store<fromLayout.State>, public dialog: MatDialog) { }

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
}
