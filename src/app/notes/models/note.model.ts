import { Category } from './category.model';

export interface Note {
  title: string;
  body?: string;
  preview?: string;
  created_at?: string;
  updated_at?: string;
  id?: string;
  categoryId?: string;
  category?: Category;
}
