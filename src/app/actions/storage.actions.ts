import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
  STORAGE: type('[Storage] Load Storage')
};

const STORAGE = '@ngrx/store/storage';

export class StorageAction implements Action {
  readonly type = STORAGE;
  constructor(readonly payload: string) {}
}


export type Actions
= StorageAction;
