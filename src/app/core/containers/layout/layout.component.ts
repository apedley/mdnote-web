import { LayoutService } from '../../layout.service';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../notes/models/category.model';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import {MediaMatcher, BreakpointObserver} from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

@Component({selector: 'app-layout', templateUrl: './layout.component.html', styleUrls: ['./layout.component.scss']})
export class LayoutComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;

  public isSmallScreen = false;
  private _mobileQueryListener: () => void;

  public sidebarEnabled = true;
  public sidebarOpen = true;

  public sidebar: Observable<boolean>;
  public authenticated: Observable<boolean>;

  constructor(public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher, private route: ActivatedRoute, private authService: AuthService, private layoutService: LayoutService) {
    this.sidebarEnabled = !route.snapshot.data['hideSidebar'];

    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.sidebar = this.layoutService.getSidebarOpen();
    this.authenticated = this.authService.getAuthenticated();
  }

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.layoutService.closeSidebar();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuButtonClicked() {
    // this.sidebarOpen = !this.sidebarOpen;
    this.layoutService.toggleSidebar();
  }

  signout() {
    this.authService.signout();
  }
}
