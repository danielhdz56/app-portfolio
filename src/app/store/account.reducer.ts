import { accountActions } from '../actions';

export interface State {
  user_id: string;
  token: string;
}

const initialState: State = {
  user_id: null,
  token: null
};

export function reducer(state = initialState, action: accountActions.Actions): State {
  switch (action.type) {
    case accountActions.ActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, action.payload);
    }
    case accountActions.ActionTypes.LOGIN_FAIL: {
      return Object.assign({}, state, {
        user_id: null,
        token: null,
      });
    }
    case accountActions.ActionTypes.REGISTER_SUCCESS: {
      return Object.assign({}, state, action.payload);
    }
    case accountActions.ActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getToken = (state: State) => state.token;
export const getId = (state: State) => state.user_id;
