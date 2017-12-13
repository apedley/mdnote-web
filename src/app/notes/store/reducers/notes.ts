import * as notes from '../actions/notes';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { Note } from '../../models/note.model';

export interface State extends EntityState<Note> {
  selectedNoteId: string | null;
  deletingNoteId: string | null;
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>({
  selectId: (note: Note) => note.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedNoteId: null,
  deletingNoteId: null
});

export function reducer(state = initialState, action: notes.actions): State {
  switch (action.type) {
    case notes.LOAD_SUCCESS: {
      return {
        ...adapter.addAll(action.payload, state),
        selectedNoteId: state.selectedNoteId
      };
    }

    case notes.SELECT: {
      return {
        ...state,
        selectedNoteId: action.payload
      };
    }

    case notes.DESELECT: {
      return {
        ...state,
        selectedNoteId: null
      };
    }

    case notes.DELETE: {
      return {
        ...state,
        deletingNoteId: action.noteId + ''
      };
    }

    case notes.DELETE_SUCCESS: {
      return {
        ...adapter.removeOne(state.deletingNoteId, state),
        deletingNoteId: null
      };
    }

    case notes.DELETE_FAIL: {
      return {
        ...state,
        deletingNoteId: null
      };
    }

    default: {
      return state;
    }
  }
}


export const getSelectedId = (state: State) => state.selectedNoteId;
