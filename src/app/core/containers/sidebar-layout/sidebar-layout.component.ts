import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import * as fromLayout from '../../store/layout.reducers';
import * as Layout from '../../store/layout.actions';
import * as fromRoot from '../../../store/reducers';

import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  public isSmallScreen = false;
  private _mobileQueryListener: () => void;

  public sidebar: Observable<boolean>;
  public authenticated: Observable<boolean>;

  public searchString = '';

  public pageTitle: Observable<string>;

  public routeData: any;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private layoutStore: Store<fromLayout.State>,
    private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.sidebar = this.layoutStore.select(fromRoot.getSidebarOpen);

    this.authenticated = of(true);

  }

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.layoutStore.dispatch(new Layout.CloseSidebar());
    }
    this.pageTitle = this.layoutStore.select(fromRoot.getTitle);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  menuButtonClicked() {
    this.layoutStore.dispatch(new Layout.ToggleSidebar());
  }

}
