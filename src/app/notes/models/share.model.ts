import { Note } from './note.model';

export interface Share {
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  id: number;
  noteId: number;
  note: Note;
  url: string;
  userId: number;
}

