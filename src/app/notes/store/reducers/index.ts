import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCategories from './categories';
import * as fromNotes from './notes';
import * as fromShares from './shares';

import * as fromRoot from '../../../store/reducers';


export interface NotesState {
  notes: fromNotes.State;
  categories: fromCategories.State;
  shares: fromShares.State;
}


export interface State extends fromRoot.State {
  notes: NotesState;
}


export const reducers = {
  notes: fromNotes.reducer,
  categories: fromCategories.reducer,
  shares: fromShares.reducer
};

export const getNotesFeatureState = createFeatureSelector<NotesState>('notes');

export const getNotesState = createSelector(getNotesFeatureState, state => state.notes);
export const getCategoriesState = createSelector(getNotesFeatureState, state => state.categories);
export const getSharesState = createSelector(getNotesFeatureState, state => state.shares);

export const getSelectedNoteId = createSelector(getNotesState, fromNotes.getSelectedId);
export const getNotesError = createSelector(getNotesState, fromNotes.getError);
export const getNotesLoaded = createSelector(getNotesState, fromNotes.getLoaded);
export const getNotesLoading = createSelector(getNotesState, fromNotes.getLoading);

export const getSelectedCategoryId = createSelector(getCategoriesState, fromCategories.getSelectedId);
export const getCategoriesError = createSelector(getCategoriesState, fromCategories.getError);
export const getCategoriesLoaded = createSelector(getCategoriesState, fromCategories.getLoaded);
export const getCategoriesLoading = createSelector(getCategoriesState, fromCategories.getLoading);
export const getCategoriesCollapsed = createSelector(getCategoriesState, fromCategories.getCollapsed);

export const {
  selectIds: getNoteIds,
  selectEntities: getNoteEntities,
  selectAll: getAllNotes,
  selectTotal: getTotalNotes
} = fromNotes.adapter.getSelectors(getNotesState);


export const {
  selectIds: getCategoryIds,
  selectEntities: getCategoryEntities,
  selectAll: getAllCategories,
  selectTotal: getTotalCategories,
} = fromCategories.adapter.getSelectors(getCategoriesState);


export const getCategoriesWithNotes = createSelector(getNoteEntities, getCategoryEntities, (notes, categories) => {
  debugger;
});

export const getSelectedNote = createSelector(getNoteEntities, getSelectedNoteId, (notes, id) => {
  return id && notes[id];
});

export const getRouteNote = createSelector(getNoteEntities, fromRoot.getRouterState, (notes, router) => {
  return router.state && notes[router.state.params.noteId];
});

export const getRouteCategory = createSelector(getCategoryEntities, getNoteEntities, fromRoot.getRouterState, (categories, notes, router) => {

  if (router.state && router.state.params.categoryId === '0') {
    const uncategorizedNotes = [];

    Object.keys(notes).forEach(noteKey => {
      const note = notes[noteKey];
      if (note.categoryId === null || note.categoryId === 0) {
        note.categoryId = 0;
        note.category = {
          name: 'Uncategorized',
          id: 0
        };
        uncategorizedNotes.push(notes[noteKey]);
      }
    });

    return {
      name: 'Uncategorized',
      id: 0,
      notes: uncategorizedNotes
    };
  }
  return router.state && categories[router.state.params.categoryId];
});

export const getSharesLoading = createSelector(getSharesState, fromShares.getLoading);
export const getSharesError = createSelector(getSharesState, fromShares.getError);
export const getSharesShare = createSelector(getSharesState, fromShares.getShare);
export const getSharesCreatedShare = createSelector(getSharesState, fromShares.getCreatedShare);
