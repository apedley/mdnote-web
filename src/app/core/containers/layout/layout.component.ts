import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../notes/category.model';
import { NotesService } from './../../../notes/notes.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import {MediaMatcher, BreakpointObserver} from '@angular/cdk/layout';

@Component({selector: 'app-layout', templateUrl: './layout.component.html', styleUrls: ['./layout.component.scss']})
export class LayoutComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;

  public isSmallScreen = false;
  private _mobileQueryListener: () => void;

  public sidebarEnabled = true;
  public sidebarOpen = false;
  @Input() sidebarStartsOpen: boolean;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, route: ActivatedRoute) {
    this.sidebarEnabled = route.snapshot.data['sidebar'];

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if (this.sidebarStartsOpen) {
      this.sidebarOpen = true;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuButtonClicked() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
