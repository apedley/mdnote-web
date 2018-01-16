import { Authenticate, User, TokenAuthenticate } from '../auth/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as fromAuth from '../auth/store/reducers';
import { Store } from '@ngrx/store';
import { Category } from '../notes/models/category.model';
import { Note } from '../notes/models/note.model';

@Injectable()
export class ApiService {
  public $authToken: Observable<string>;

  public authToken: string;

  constructor(private httpClient: HttpClient, private store: Store<fromAuth.State>) {

    this.$authToken = this.store.select(fromAuth.getToken);

    this.$authToken.subscribe( token => {
      this.authToken = token;
    });
  }

  signUp(userInfo: Authenticate) {
    return this.post<TokenAuthenticate>('/signup', userInfo);
  }

  signIn(userInfo: Authenticate) {
    return this.post<TokenAuthenticate>('/signin', userInfo);
  }

  getAllNotes() {
    const url = `${environment.baseApiUrl}/notes`;
    const authHeader = `bearer ${this.authToken}`;
    return this.httpClient.get<[Category]>(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  getAllCategories() {
    const url = `${environment.baseApiUrl}/categories`;
    const authHeader = `bearer ${this.authToken}`;

    return this.httpClient.get<[Category]>(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  createNote(noteData: Note) {
    const url = `${environment.baseApiUrl}/notes`;
    const authHeader = `bearer ${this.authToken}`;

    const cleanNoteData = this._removeInvalidKeys(noteData);

    return this.httpClient.post(url, cleanNoteData, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  editNote(noteId: number, noteData: Note) {
    const url = `${environment.baseApiUrl}/notes/${noteId}`;
    const authHeader = `bearer ${this.authToken}`;
    const cleanNoteData = this._removeInvalidKeys(noteData);

    return this.httpClient.patch(url, cleanNoteData, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  deleteNote(noteId) {
    const url = `${environment.baseApiUrl}/notes/${noteId}`;
    const authHeader = `bearer ${this.authToken}`;

    return this.httpClient.delete(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  createCategory(categoryName: string) {
    const url = `${environment.baseApiUrl}/categories`;
    const authHeader = `bearer ${this.authToken}`;

    const body = { name: categoryName };

    return this.httpClient.post(url, body, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  deleteCategory(categoryId) {
    const url = `${environment.baseApiUrl}/categories/${categoryId}`;
    const authHeader = `bearer ${this.authToken}`;

    return this.httpClient.delete(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }


  searchNotes(searchString: string) {
    const url = `${environment.baseApiUrl}/notes/search?q=${searchString}`;
    const authHeader = `bearer ${this.authToken}`;

    return this.httpClient.get(url, {
      headers: new HttpHeaders().set('Authorization', authHeader)
    });
  }

  loadShare(shareUrl: string) {
    const url = `${environment.baseApiUrl}/shared/${shareUrl}`;

    return this.httpClient.get(url);
  }


  post<T>(path: string, body: any, authenticated = true): Observable<T> {
    const url = this._getUrl(path);
    const headers = this._getAuthHeaders();

    if (this.authToken) {
      return this.httpClient.post<T>(url, body, {
        headers
      });
    } else {
      return this.httpClient.post<T>(url, body);
    }
  }

  get<T>(path: string, authenticated = true): Observable<T> {
    const url = this._getUrl(path);
    const headers = this._getAuthHeaders();

    if (this.authToken) {
      return this.httpClient.get<T>(url, {
        headers
      });
    } else {
      return this.httpClient.get<T>(url);
    }
  }

  patch<T>(path: string, body: any, authenticated = true): Observable<T> {
    const url = this._getUrl(path);
    const headers = this._getAuthHeaders();

    if (this.authToken) {
      return this.httpClient.patch<T>(url, body, {
        headers
      });
    } else {
      return this.httpClient.patch<T>(url, body);
    }
  }

  delete<T>(path: string, authenticated = true): Observable<number> {
    const url = this._getUrl(path);
    const headers = this._getAuthHeaders();

    if (this.authToken) {
      return this.httpClient.delete<number>(url, {
        headers
      });
    } else {
      return this.httpClient.delete<number>(url);
    }
  }

  private _getUrl(path: string) {
    return `${environment.baseApiUrl}${path}`;
  }

  private _getAuthHeaders() {
    return new HttpHeaders().set('Authorization', `bearer ${this.authToken}`);
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
