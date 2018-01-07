
import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { CategoriesActions, CategoriesActionTypes } from '../actions/categories';
import { Category } from '../../models/category.model';

export interface State extends EntityState<Category> {
  selectedCategoryId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => category.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedCategoryId: null,
  loading: false,
  loaded: false,
  error: null
});

export function reducer(state = initialState, action: CategoriesActions): State {
  switch (action.type) {

    case(CategoriesActionTypes.AddCategory):
    case(CategoriesActionTypes.Fetch): {
      return { ...state, loading: true };
    }

    case(CategoriesActionTypes.AddCategorySuccess): {
      return { ...adapter.addOne(action.payload, state), loading: false };
    }

    case(CategoriesActionTypes.AddCategoryFailure): {
      return { ...state, error: action.payload, loading: false };
    }

    case(CategoriesActionTypes.FetchSuccess): {
      return { ...adapter.addAll(action.payload, state), loading: false };
    }

    case(CategoriesActionTypes.FetchFailure): {
      return { ...state, error: action.payload, loading: false };
    }

    case(CategoriesActionTypes.Select): {
      return { ...state, selectedCategoryId: action.payload };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedCategoryId;
export const getError = (state: State) => state.error;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
