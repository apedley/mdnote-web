import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { NotesService } from '../../notes.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { SharesActionTypes, LoadShare, LoadShareSuccess, LoadShareFailure, CreateShare, CreateShareSuccess, CreateShareFailure } from '../actions/shares';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Share } from '../../models/share.model';
import { of } from 'rxjs/observable/of';
import { LayoutService } from '../../../core/layout.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SharesEffects {

  @Effect()
  loadShare: Observable<Action> = this.actions.ofType(SharesActionTypes.LoadShare).pipe(
    switchMap((action: LoadShare) => {
      return this.notes.loadShare(action.payload);
    }),
    map((share: Share) => {
      return new LoadShareSuccess(share);
    }),
    catchError((err) => of(new LoadShareFailure(err.error)))
  );

  @Effect()
  createShare: Observable<Action> = this.actions.ofType(SharesActionTypes.CreateShare).pipe(
    switchMap((action: CreateShare) => {
      return this.notes.createShare(action.payload);
    }),
    map((share: Share) => {
      return new CreateShareSuccess(share);
    }),
    catchError((err) => of(new CreateShareFailure(err.error)))
  );

  @Effect({ dispatch: false })
  createShareSuccess = this.actions.ofType(SharesActionTypes.CreateShareSuccess).pipe(
    map((action: CreateShareSuccess) => {
      const share = action.payload;

      const fullUrl = `${environment.baseShareUrl}/${share.url}`;

      this.layout.openShareDialog({
        title: share.title,
        url: share.url,
        fullUrl
      });

    })
  );
  constructor(private actions: Actions, private notes: NotesService, private layout: LayoutService) { }
}
