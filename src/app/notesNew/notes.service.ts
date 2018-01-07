import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Category } from './models/category.model';

@Injectable()
export class NotesService {
  constructor(private api: ApiService) {}

  fetchCategories() {
    return this.api.get<Category[]>('/categories', true);
  }
}
