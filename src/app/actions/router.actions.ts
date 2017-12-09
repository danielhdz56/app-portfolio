// ANGULAR
import { NavigationExtras } from '@angular/router';
// NGRX
import { Action } from '@ngrx/store';
// OTHER
import { type } from '../utils';

export const ActionTypes = {
  GO:                         type('[Router] Go')
};

/** Angular Router-style navigation */
export class GoAction implements Action {
  type = ActionTypes.GO;
  constructor(public payload: {path: any[], query?: object, extras?: NavigationExtras}) {}
}

export type Actions
  = GoAction;
