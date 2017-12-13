import { AuthService } from '../../../auth/auth.service';
import { LayoutService } from '../../layout.service';
import { Category } from '../../../notes/models/category.model';
import { NotesService } from '../../../notes/notes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  categories: Observable<Category[]>;

  constructor(
    private notesService: NotesService,
    public router: Router,
    private layoutService: LayoutService,
    private authService: AuthService
  ) {
    this.categories = this.notesService.getCategoriesWithNotes();
  }

  ngOnInit() {

  }


  newCategory() {
    this.layoutService.openUserInputDialog({ title: 'New Category', content: 'Name for new Category?', response: null}).subscribe(result => {
      if (!result) { return; }
      this.notesService.createCategory(result);
    });
  }

  logout() {
    this.authService.signout();
  }
}
