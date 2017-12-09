import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as selectors from '../store';
import { User } from '../models';
import { parseServerJson } from './internal';
import { checkToken } from '../utils';

@Injectable()
export class AuthenticationService {

  constructor (
    private _http: HttpClient,
    private _store$: Store<selectors.State>
  ) { }

  /**
   * Authenticate a user from `email` and `password` by requesting a token from the server.
   * If `email` or `password` is invalid. Error will be emitted with message `Authentication Exception - Invalid email or password`.
   */
  signIn (email: string, password: string): Observable<{ user: User, token: string }> {
    if (!email) { return Observable.throw(new Error ('Parameter `email` must be provided to sign in')); }
    if (!password) { return Observable.throw(new Error ('Parameter `password` must be provided to sign in')); }

    return this._http.post('/api/auth/login', { email, password })
      .catch(err => {
        const resp = err.json();
        return Observable.throw(new Error(`HTTP Exception - ${ resp.message || resp.error }`));
      });
  }

  register (email: string, password: string): Observable<{ user: User, token: string }> {
    if (!email) { return Observable.throw(new Error ('Paramater `email` must be provided to register')); }
    if (!password) { return Observable.throw(new Error ('Parameter `password` must be provided to register')); }
    return this._http.post('/api/auth/register', { email, password})
      .catch(err => {
        const resp = err.json();
        return Observable.throw(new Error(`HTTP Exception - ${ resp.message || resp.error }`));
      });
  }

}
