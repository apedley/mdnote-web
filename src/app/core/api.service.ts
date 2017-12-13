import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Category } from '../notes/models/category.model';
import { Note } from '../notes/models/note.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from 'app/auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllNotes() {
    const url = `${environment.baseApiUrl}/notes`;
    const authHeader = `bearer ${this.authService.token}`;
    return this.httpClient.get<[Category]>(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  getAllCategories() {
    const url = `${environment.baseApiUrl}/categories`;
    const authHeader = `bearer ${this.authService.token}`;

    return this.httpClient.get<[Category]>(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  createNote(noteData: Note) {
    const url = `${environment.baseApiUrl}/notes`;
    const authHeader = `bearer ${this.authService.token}`;

    const cleanNoteData = this._removeInvalidKeys(noteData);

    return this.httpClient.post(url, cleanNoteData, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  editNote(noteId: number, noteData: Note) {
    const url = `${environment.baseApiUrl}/notes/${noteId}`;
    const authHeader = `bearer ${this.authService.token}`;
    const cleanNoteData = this._removeInvalidKeys(noteData);

    return this.httpClient.patch(url, cleanNoteData, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  deleteNote(noteId) {
    const url = `${environment.baseApiUrl}/notes/${noteId}`;
    const authHeader = `bearer ${this.authService.token}`;

    return this.httpClient.delete(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  createCategory(categoryName: string) {
    const url = `${environment.baseApiUrl}/categories`;
    const authHeader = `bearer ${this.authService.token}`;

    const body = { name: categoryName };

    return this.httpClient.post(url, body, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  deleteCategory(categoryId) {
    const url = `${environment.baseApiUrl}/categories/${categoryId}`;
    const authHeader = `bearer ${this.authService.token}`;

    return this.httpClient.delete(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  private _removeInvalidKeys(dataObject: any) {
    return Object.keys(dataObject).reduce((prev, key) => {
      if (dataObject[key] && dataObject[key] !== 'null') {
        prev[key] = dataObject[key];
      }
      return prev;
    }, {});
  }
}