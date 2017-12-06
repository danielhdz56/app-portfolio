import { Action } from '@ngrx/store';
import { type } from '../utils';
import { User } from '../models';

export const ActionTypes = {
  LOAD:                                 type('[User] Load'),
  LOAD_SUCCESS:                         type('[User] Load Success'),
  CLEAR_ACTION:                         type('[User] Clear Action')
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;
  payload = null;
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;
  constructor (public payload: User) {}
}

export class ClearAction implements Action {
  type = ActionTypes.CLEAR_ACTION;
  payload = null;
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | ClearAction;
