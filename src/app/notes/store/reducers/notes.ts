
import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { NotesActions, NotesActionTypes, DeleteNote, DeleteNoteFailure, UpdateNoteSuccess } from '../actions/notes';
import { Note } from '../../models/note.model';
import * as authActions from '../../../auth/store/actions';

export interface State extends EntityState<Note> {
  selectedNoteId: number | null;
  loading: boolean;
  loaded: boolean;
  lastLoaded: number;
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
  lastLoaded: null,
  error: null
});

export function reducer(state = initialState, action: NotesActions | authActions.Actions): State {
  switch (action.type) {

    case(NotesActionTypes.AddNote):
    case(NotesActionTypes.UpdateNote):
    case(NotesActionTypes.Fetch):
    case(NotesActionTypes.DeleteNote): {
      return { ...state, loading: true };
    }

    case(NotesActionTypes.AddNoteFailure):
    case(NotesActionTypes.UpdateNoteFailure):
    case(NotesActionTypes.DeleteNoteFailure): {
      return { ...state, error: action.payload, loading: false };
    }

    case(NotesActionTypes.FetchSuccess): {
      return { ...adapter.addAll(action.payload, state), loading: false, loaded: true, lastLoaded: Date.now() };
    }

    case(NotesActionTypes.FetchFailure): {
      return { ...state, error: action.payload, loading: false, loaded: false };
    }

    case(NotesActionTypes.Select): {
      return { ...state, selectedNoteId: action.payload };
    }

    case(NotesActionTypes.AddNoteSuccess): {
      return { ...adapter.addOne(action.payload, state), loading: false };
    }

    case(NotesActionTypes.UpdateNoteSuccess): {
      return { ...adapter.updateOne({ id: action.payload.id, changes: action.payload }, state), loading: false };
    }

    case(NotesActionTypes.DeleteNoteSuccess): {
      return { ...adapter.removeOne(action.payload, state), loading: false };
    }


    case(authActions.SIGNOUT): {
      return initialState;
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
export const getLastLoaded = (state: State) => state.lastLoaded;

