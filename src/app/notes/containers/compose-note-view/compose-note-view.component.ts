import { OnInit, Component } from '@angular/core';
import * as Categories from '../../store/actions/categories';
import * as Notes from '../../store/actions/notes';
import * as fromNotes from '../../store/reducers';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../models/category.model';
import { Store } from '@ngrx/store';
import { LayoutService } from '../../../core/layout.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-compose-note-view',
  templateUrl: './compose-note-view.component.html',
  styleUrls: ['./compose-note-view.component.scss']
})
export class ComposeNoteViewComponent implements OnInit {
  public categories: Observable<Category[]>;

  public categoriesLoaded: Observable<boolean>;

  public selectedNote: Observable<Note>;

  public body = '';

  constructor(private store: Store<fromNotes.State>, private layout: LayoutService) {


    this.categories = this.store.select(fromNotes.getCategoriesWithNotes);
    this.categoriesLoaded = this.store.select(fromNotes.getCategoriesLoaded);

    this.categoriesLoaded.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new Categories.Fetch());
      }
    });

    this.selectedNote = this.store.select(fromNotes.getRouteNote);

    this.selectedNote.subscribe(note => {
      if (!note) {
        return this.layout.setTitle('New Note');
      }
      this.layout.setTitle(`Edit: ${note.title}`);
    });
  }

  ngOnInit() {

  }

  bodyChanged(body: string) {
    this.body = body;
  }

  formSubmitted(data: Note) {
    if (data.id) {
      this.store.dispatch(new Notes.UpdateNote(data));
    } else {
      this.store.dispatch(new Notes.AddNote(data));
    }
  }

  newCategory() {
    this.layout.openUserInputDialog({ title: 'New Category', content: 'Name for new Category?', response: null}).subscribe(result => {
      if (!result) { return; }
      this.store.dispatch(new Categories.AddCategory({ name: result }));
    });
  }
}
