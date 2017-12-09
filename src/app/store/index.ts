// NGRX
import { Action, ActionReducer, ActionReducerMap, combineReducers, compose, MetaReducer } from '@ngrx/store';
import { localStorageSync, LocalStorageConfig, rehydrateApplicationState } from 'ngrx-store-localstorage';

// REDUCERS
import * as accounts from './account.reducer';
import * as users from './users.reducer';
// OTHER
import { createSelector } from 'reselect';
import { storageActions } from '../actions/index';

export interface State {
  accounts: accounts.State;
  users: users.State;
}

export const reducers: ActionReducerMap<State> = {
  accounts: accounts.reducer,
  users: users.reducer
};

const localStorageOptions: LocalStorageConfig = {
  keys: ['accounts'],
  rehydrate: true
};

// TODO. implement storefreeze for development
const developmentReducer: ActionReducer<State> = compose(localStorageSync(localStorageOptions), combineReducers)(reducers);
export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}


export function localStorageSyncReducer(r: ActionReducer<any>): ActionReducer<any> {
  return (state: State, action: storageActions.Actions) => {
    const keys = ['accounts'];

    if (action.type === storageActions.ActionTypes.STORAGE && keys.includes(action.payload)) {
      const rehydratedState = rehydrateApplicationState([action.payload], localStorage, k => k);
      return { ...state, ...rehydratedState };
    }
    return localStorageSync({
      keys,
      rehydrate: true,
    })(reducer)(state, action);
  };
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// Users
export const getUsersState = (state: State) => state.users;
export const getUserEntities = createSelector(getUsersState, users.getEntities);

// Accounts
export const getAccount = (state: State) => state.accounts;
export const getAccountToken = createSelector(getAccount, accounts.getToken);
export const getAccountId = createSelector(getAccount, accounts.getId);
export const getAccountUser = createSelector(getUserEntities, getAccountId, (u, id) => u[id]);
export const getIsAuth = createSelector(getAccountUser, user => !!user);
