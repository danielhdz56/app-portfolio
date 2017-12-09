import { createSelector } from '@ngrx/store';
import { userActions } from '../actions';
import { User } from '../models';

export interface State {
  entities: { [_id: string]: User };
}

const initialState: State = {
  entities: { },
};
// TODO: since we are only loading one user we may not want entities.
export function reducer (state = initialState, action: userActions.Actions) {
  switch (action.type) {
    case userActions.ActionTypes.LOAD_SUCCESS: {
      const newEntities = { [action.payload._id] : action.payload };
      return Object.assign({ }, state, {
        entities: Object.assign({}, state.entities, newEntities)
      });
    }

    case userActions.ActionTypes.CLEAR_ACTION: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
