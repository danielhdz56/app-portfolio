// ANGULAR
import { of } from 'rxjs/observable/of';
import { Injectable} from '@angular/core';
import { Location } from '@angular/common';
// NGRX
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { accountActions, routerActions } from '../actions';
import { map, switchMap, mergeMap} from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';

// SERVICES
import { AuthenticationService } from '../services';


@Injectable()
export class AccountEffects {
  @Effect()
  login$: Observable<Action> = this._actions$
    .ofType(accountActions.ActionTypes.LOGIN)
    .pipe(map((action: accountActions.LoginAction) => {
      console.log(action.payload);
      return action.payload;
    }))
    .pipe(switchMap(({email, password}) => {
      console.log('email', email);
      console.log('password', password);
      return this._authenticationService.signIn(email, password)
        .pipe(mergeMap(({ user, token}) => {
          return of(new routerActions.GoAction({ path: ['/']}));
        }))
        .catch(() => of(new accountActions.LoginFailAction('Unable to log in with the Email and Password provided')));
    }));

  @Effect()
  register$: Observable<Action> = this._actions$
    .ofType(accountActions.ActionTypes.REGISTER)
    .pipe(map((action: accountActions.RegisterAction) => action.payload))
    .pipe(switchMap(({email, password}) => {
      return this._authenticationService.register(email, password)
      .pipe(mergeMap(({ user, token}) => {
        return merge([
          new routerActions.GoAction({ path: ['/']}),
          new accountActions.LoginSuccessAction({ user_id: user._id, token })
        ]);
      }))
      .catch(() => of(new accountActions.RegisterFailAction('Unable to register with the Email, and Password provided')));
    }));



  constructor(
    private _actions$: Actions,
    private _location: Location,
    private _authenticationService: AuthenticationService,
  ) { }

}
