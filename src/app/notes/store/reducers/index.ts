import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCategories from './category';
import * as fromNotes from './notes';
import * as fromRoot from '../../../store/reducers';

export interface NotesState {
  categories: fromCategories.State;
  notes: fromNotes.State;
}

export interface State extends fromRoot.State {
  notes: NotesState;
}

export const reducers = {
  categories: fromCategories.reducer,
  notes: fromNotes.reducer
};

export const getNotesState = createFeatureSelector<NotesState>('notes');

export const getCategoriesState = createSelector(
  getNotesState,
  state => state.categories
);

export const getSelectedCategoryId = createSelector(
  getCategoriesState,
  fromCategories.getSelectedId
);

export const getCategoriesLoaded = createSelector(
  getCategoriesState,
  fromCategories.getCategoriesLoaded
);

export const getNoteEntitiesState = createSelector(
  getNotesState,
  state => state.notes
);

export const getSelectedNoteId = createSelector(
  getNoteEntitiesState,
  fromNotes.getSelectedId
);
export const {
  selectIds: getCategoryIds,
  selectEntities: getCategoryEntities,
  selectAll: getAllCategories,
  selectTotal: getTotalCategories,
} = fromCategories.adapter.getSelectors(getCategoriesState);

export const {
  selectIds: getNoteIds,
  selectEntities: getNoteEntities,
  selectAll: getAllNotes,
  selectTotal: getTotalNotes,
} = fromNotes.adapter.getSelectors(getNoteEntitiesState);


export const getSelectedCategory = createSelector(
  getCategoryEntities,
  getSelectedCategoryId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const getSelectedNote = createSelector(
  getNoteEntities,
  getSelectedNoteId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const getRouteNote = createSelector(
  getNoteEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.noteId];
  }
);

export const selectShare = createSelector(
  getNoteEntitiesState,
  fromNotes.getShare
);
