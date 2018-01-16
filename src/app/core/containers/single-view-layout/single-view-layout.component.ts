import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromLayout from '../../store/layout.reducers';
import * as fromRoot from '../../../store/reducers';

@Component({
  selector: 'app-single-view-layout',
  templateUrl: './single-view-layout.component.html',
  styleUrls: ['./single-view-layout.component.scss']
})
export class SingleViewLayoutComponent implements OnInit {

  public pageTitle: Observable<string>;

  constructor(private layoutStore: Store<fromLayout.State>) {}

  ngOnInit() {
    this.pageTitle = this.layoutStore.select(fromRoot.getTitle);
  }
}
