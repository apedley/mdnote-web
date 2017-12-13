import * as categories from '../actions/category';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { Category } from '../../models/category.model';

export interface State extends EntityState<Category> {
  selectedCategoryId: string | null;
  deletingCategoryId: string | null;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => category.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedCategoryId: null,
  deletingCategoryId: null
});

export function reducer(state = initialState, action: categories.actions): State {
  switch (action.type) {
    case categories.LOAD_SUCCESS: {
      return {
        ...adapter.addAll(action.payload, state),
        selectedCategoryId: state.selectedCategoryId
      };
    }

    case categories.SELECT: {
      return {
        ...state,
        selectedCategoryId: action.payload
      };
    }

    case categories.CREATE_SUCCESS: {
      return {
        ...state,
        ...adapter.addOne(action.payload, state)
      };
    }

    case categories.DELETE: {
      return {
        ...state,
        deletingCategoryId: action.categoryId + ''
      };
    }

    case categories.DELETE_SUCCESS: {
      return {
        ...adapter.removeOne(state.deletingCategoryId, state),
        deletingCategoryId: null
      };
    }

    case categories.DELETE_FAIL: {
      return {
        ...state,
        deletingCategoryId: null
      };
    }


    default: {
      return state;
    }
  }
}


export const getSelectedId = (state: State) => state.selectedCategoryId;
