import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog.component';
import { InputDialog, ConfirmationDialog, ShareDialog } from './models/dialog.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from './store/layout.reducers';
import * as fromRoot from '../store/reducers';
import * as layout from './store/layout.actions';
// import * as fromNotes from '../notes/store/reducers';
// import * as notesActions from '../notes/store/actions/notes';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserInputDialogComponent } from './components/dialogs/user-input-dialog.component';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

import { environment } from '../../environments/environment';
import { ShareDialogComponent } from './components/dialogs/share-dialog.component';

@Injectable()
export class LayoutService {


  constructor(
    private layoutStore: Store<fromLayout.State>,
    private titleService: Title,
    // private notesStore: Store<fromNotes.State>,
    public dialog: MatDialog) { }

  openUserInputDialog(dialog: InputDialog) {

    const dialogRef = this.dialog.open(UserInputDialogComponent, {
      width: '300px',
      data: { title: dialog.title, content: dialog.content, response: dialog.response }
    });

    return dialogRef.afterClosed();
  }

  openConfirmationDialog(dialog: ConfirmationDialog, cancelButton = true) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { title: dialog.title, content: dialog.content, cancelButton}
    });

    return dialogRef.afterClosed();
  }

  openShareDialog(dialog: ShareDialog) {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      width: '400px',
      data: { title: dialog.title, url: dialog.url, fullUrl: dialog.fullUrl }
    });

    return dialogRef.afterClosed();
  }

  sidebarDisabledForRoute(path: string) {

  }

  setTitle(title: string) {
    this.titleService.setTitle(`${title} | mdNote`);
    this.layoutStore.dispatch(new layout.SetTitle(title));
  }

}
