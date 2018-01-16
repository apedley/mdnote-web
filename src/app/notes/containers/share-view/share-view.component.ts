import { Component } from '@angular/core';
import { Note } from '../../models/note.model';
import { Share } from '../../models/share.model';
import * as fromNotes from '../../store/reducers';
import * as fromRoot from '../../../store/reducers';
import * as Shares from '../../store/actions/shares';
import { Observable } from 'rxjs/Observable';
import { LayoutService } from '../../../core/layout.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-share-view',
  templateUrl: './share-view.component.html',
  styleUrls: ['./share-view.component.scss']
})
export class ShareViewComponent {
  share: Observable<Share>;
  shareUrl: string;
  params: Observable<{}>;

  constructor(
  private store: Store<fromNotes.State>,
  private layout: LayoutService) {

    this.share = this.store.select(fromNotes.getSharesShare);

    this.share.subscribe(share => {
      if (!share || !share.title) {
        return;
      }
      this.layout.setTitle(share.title);
    });

    this.params = this.store.select(fromRoot.getParams);

    this.params.subscribe(params => {
      if (!params['shareUrl']) {
        return;
      }
      this.store.dispatch(new Shares.LoadShare(params['shareUrl']));
    });
  }

}
