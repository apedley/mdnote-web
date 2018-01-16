import { Note } from './note.model';

export interface Category {
  id?: number;
  name: string;
  description?: string;
  userId?: number;
  notes?: Note[];
  created_at?: string;
  updated_at?: string;
}
