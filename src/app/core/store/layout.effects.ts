import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import * as layoutActions from './layout.actions';
import { Observable } from 'rxjs/Observable';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MatDialog } from '@angular/material';

@Injectable()
export class LayoutEffects {
  // dialogRef;

  // @Effect({ dispatch: false })
  // openDialog = this.actions.ofType(layoutActions.OPEN_DIALOG).pipe(
  //   map((action: layoutActions.OpenDialog) => {
  //     this.dialogRef = this.dialog.open(SimpleDialogComponent, {
  //       width: '250px',
  //       data: { title: action.payload.title, content: action.payload.content, response: action.payload.response }
  //     });

  //     return this.dialogRef.afterClosed();
  //   })
  // );

  constructor(private actions: Actions, private router: Router, public dialog: MatDialog) { }

}
