import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCategories from './categories';
import * as fromNotes from './notes';

import * as fromRoot from '../../../store/reducers';


export interface NotesState {
  notes: fromNotes.State;
  categories: fromCategories.State;
}


export interface State extends fromRoot.State {
  notes: NotesState;
}


export const reducers = {
  notes: fromNotes.reducer,
  categories: fromCategories.reducer,
};

export const getNotesFeatureState = createFeatureSelector<NotesState>('notes');

export const getNotesState = createSelector(getNotesFeatureState, state => state.notes);
export const getCategoriesState = createSelector(getNotesFeatureState, state => state.categories);

export const getSelectedNoteId = createSelector(getNotesState, fromNotes.getSelectedId);
export const getNotesError = createSelector(getNotesState, fromNotes.getError);
export const getNotesLoaded = createSelector(getNotesState, fromNotes.getLoaded);
export const getNotesLoading = createSelector(getNotesState, fromNotes.getLoading);

export const getSelectedCategoryId = createSelector(getCategoriesState, fromCategories.getSelectedId);
export const getCategoriesError = createSelector(getCategoriesState, fromCategories.getError);
export const getCategoriesLoaded = createSelector(getCategoriesState, fromCategories.getLoaded);
export const getCategoriesLoading = createSelector(getCategoriesState, fromCategories.getLoading);

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

