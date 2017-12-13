import { Note } from './note.model';

export interface Category {
  name: string;
  userId?: string;
  created_at?: string;
  updated_at?: string;
  id?: string;
  description?: string;
  notes?: Note[];
}
