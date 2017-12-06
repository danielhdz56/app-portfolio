import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
  LOGIN:                  type('[Account] Login'),
  LOGIN_SUCCESS:          type('[Account] Login Success'),
  LOGIN_FAIL:             type('[Account] Login Fail'),
  LOGOUT:                 type('[Account] Logout'),
  LOGOUT_SUCCESS:         type('[Account] Logout Success'),
  LOGOUT_FAIL:            type('[Account] Logout Fail'),
  REGISTER:               type('[Account] Register'),
  REGISTER_SUCCESS:       type('[Account] Register Suceess'),
  REGISTER_FAIL:          type('[Account] Register Fail'),
};

/** Account login with email and password */
export class LoginAction implements Action {
  type = ActionTypes.LOGIN;
  constructor (public payload: { email: string, password: string}) {}
}

/** Successful login with email and web token */
export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;
  constructor (public payload: { user_id: string, token: string }) {}
}

/** Failed login with error message payload */
export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;
  constructor (public payload: string) {}
}

/** Logging out */
export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
  payload = null;
}

export class LogoutSuccessAction implements Action {
  type = ActionTypes.LOGOUT_SUCCESS;
  payload = null;
}

export class LogoutFailAction implements Action {
  type = ActionTypes.LOGOUT_FAIL;
  constructor (public payload: string) {}
}

/** Register */
export class RegisterAction implements Action {
  type = ActionTypes.REGISTER;
  constructor (public payload: { email: string, password: string, username: string}) {}
}

export class RegisterSuccessAction implements Action {
  type = ActionTypes.REGISTER_SUCCESS;
  constructor (public payload: { user_id: string, token: string }) {}
}

export class RegisterFailAction implements Action {
  type = ActionTypes.REGISTER_FAIL;
  constructor (public payload: string) {}
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutFailAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction;
