import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';
import * as fromNotes from './store/reducers';
import { filter, take, switchMap, map } from 'rxjs/operators';

@Injectable()
export class NoteExistsGuard implements CanActivate {

  constructor(private router: Router, private store: Store<fromNotes.State>) {
  }

  waitForNotesToLoad(): Observable<boolean> {
    const notesLoaded = this.store.select(fromNotes.getNotesLoaded);
    const categoriesLoaded = this.store.select(fromNotes.getCategoriesLoaded);

    return categoriesLoaded.pipe(
      filter(loaded => loaded),
      take(1)
    );
  }

  noteExists(id: number): Observable<boolean> {

    const notes = this.store.select(fromNotes.getNoteEntities);

    return notes.pipe(
      map(entities => {
        const result = !!entities[id];

        if (!result) {
          this.router.navigate(['/notes']);
        }
        return result;
      }),
      take(1)
    );

  }
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForNotesToLoad().pipe(
      switchMap(() => {
        return this.noteExists(route.params['noteId']);
      })
    );
  }
}
