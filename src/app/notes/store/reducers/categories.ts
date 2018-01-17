
import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { CategoriesActions, CategoriesActionTypes } from '../actions/categories';
import { Category } from '../../models/category.model';
import * as authActions from '../../../auth/store/actions';

export interface State extends EntityState<Category> {
  selectedCategoryId: number | null;
  loading: boolean;
  loaded: boolean;
  lastLoaded: number;
  error: string;
  collapsed: {};
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => category.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedCategoryId: null,
  loading: false,
  loaded: false,
  lastLoaded: null,
  error: null,
  collapsed: {},
});

export function reducer(state = initialState, action: CategoriesActions | authActions.Actions): State {
  switch (action.type) {

    case(CategoriesActionTypes.AddCategory):
    case(CategoriesActionTypes.DeleteCategory):
    case(CategoriesActionTypes.Fetch): {
      return { ...state, loading: true };
    }

    case(CategoriesActionTypes.FetchSuccess): {
      return { ...adapter.addAll(action.payload, state), loading: false, loaded: true, lastLoaded: Date.now() };
    }

    case(CategoriesActionTypes.FetchFailure): {
      return { ...state, error: action.payload, loading: false, loaded: false };
    }

    case(CategoriesActionTypes.Select): {
      return { ...state, selectedCategoryId: action.payload };
    }

    case(CategoriesActionTypes.AddCategorySuccess): {
      return { ...adapter.addOne(action.payload, state), loading: false };
    }

    case(CategoriesActionTypes.AddCategoryFailure):
    case(CategoriesActionTypes.DeleteCategoryFailure): {
      return { ...state, error: action.payload, loading: false };
    }

    case(CategoriesActionTypes.DeleteCategorySuccess): {
      return { ...adapter.removeOne(action.payload, state), loading: false};
    }

    case(authActions.SIGNOUT): {
      return initialState;
    }


    case(CategoriesActionTypes.ToggleCategory): {
      return {
        ...state,
        collapsed: {
          ...state.collapsed,
          [action.payload]: !state.collapsed[action.payload]
        }
      };
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
export const getLastLoaded = (state: State) => state.lastLoaded;
export const getCollapsed = (state: State) => state.collapsed;
