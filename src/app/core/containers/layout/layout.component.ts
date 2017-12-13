import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../notes/models/category.model';
import { NotesService } from '../../../notes/notes.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import {MediaMatcher, BreakpointObserver} from '@angular/cdk/layout';

@Component({selector: 'app-layout', templateUrl: './layout.component.html', styleUrls: ['./layout.component.scss']})
export class LayoutComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;

  public isSmallScreen = false;
  private _mobileQueryListener: () => void;

  public sidebarEnabled = true;
  public sidebarOpen = true;
  // @Input() sidebarStartsOpen: boolean;

  constructor(public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher, private route: ActivatedRoute, private authService: AuthService) {
    this.sidebarEnabled = !route.snapshot.data['hideSidebar'];

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.sidebarOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuButtonClicked() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  signout() {
    this.authService.signout();
  }
}
