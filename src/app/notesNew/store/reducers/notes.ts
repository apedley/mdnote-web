
import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { NotesActions, NotesActionTypes } from '../actions/notes';
import { Note } from '../../models/note.model';

export interface State extends EntityState<Note> {
  selectedNoteId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>({
  selectId: (note: Note) => note.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedNoteId: null,
  loading: false,
  loaded: false,
  error: null
});

export function reducer(state = initialState, action: NotesActions): State {
  switch (action.type) {

    case(NotesActionTypes.AddNote):
    case(NotesActionTypes.Fetch): {
      return { ...state, loading: true };
    }

    case(NotesActionTypes.AddNoteSuccess): {
      return { ...adapter.addOne(action.payload, state), loading: false };
    }

    case(NotesActionTypes.AddNoteFailure): {
      return { ...state, error: action.payload, loading: false };
    }

    case(NotesActionTypes.FetchSuccess): {
      return { ...adapter.addAll(action.payload, state), loading: false };
    }

    case(NotesActionTypes.FetchFailure): {
      return { ...state, error: action.payload, loading: false };
    }

    case(NotesActionTypes.Select): {
      return { ...state, selectedNoteId: action.payload };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedNoteId;
export const getError = (state: State) => state.error;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
