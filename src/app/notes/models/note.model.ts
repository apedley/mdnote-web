import { Category } from './category.model';

export interface Note {
  id?: number;
  title: string;
  body: string;
  categoryId?: number;
  category?: Category;
  created_at?: string;
  updated_at?: string;
  preview?: string;
}
