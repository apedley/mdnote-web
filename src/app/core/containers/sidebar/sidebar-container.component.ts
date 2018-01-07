import { AuthService } from '../../../auth/auth.service';
import { LayoutService } from '../../layout.service';
import { Category } from '../../../notes/models/category.model';
// import { NotesService } from '../../../notes/notes.service';
import * as fromNotes from '../../../notes/store/reducers';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  public categories: Observable<Category[]>;

  constructor(
    private layoutService: LayoutService,
    private store: Store<fromNotes.State>
  ) {
  }

  ngOnInit() {
    this.categories = this.store.select(fromNotes.getAllCategories);
  }


  newCategory() {
    this.layoutService.openUserInputDialog({ title: 'New Category', content: 'Name for new Category?', response: null}).subscribe(result => {
      if (!result) { return; }
    });
  }

  logout() {
  }
}
