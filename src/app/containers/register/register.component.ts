// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// NGRX
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import * as selectors from '../../store';
import { accountActions } from '../../actions';

// OTHERS
import * as _ from 'lodash';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerFormGroup: FormGroup;
  showRegister = true;
  loginFormGroup: FormGroup;
  submitAttempted = false;
  showCheckedError = false;
  private _subscriptions: Subscription[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _store$: Store<selectors.State>
  ) { }

  ngOnInit () {
    this.registerFormGroup = this._formBuilder.group({
        email: ['', {
          validators: [
            Validators.required,
            Validators.email
          ]
        }],
        password: ['', {
          validators: [
              Validators.required,
            ],
        }],
        confirmPassword: ['', {
          validators: [
              Validators.required,
            ],
        }],
      },
      {
        validator: this.passwordMatchValidator,
      },
    );

    this.loginFormGroup = this._formBuilder.group({
      email: ['', {
        validators: [
            Validators.required,
            Validators.email
          ],
        updateOn: 'submit'
      }],
      password: ['', {
        validators: [
            Validators.required,
          ],
        updateOn: 'submit'
      }],
    });

    const formSub = this.registerFormGroup.valueChanges.subscribe(v => {
      this.showCheckedError = this.submitAttempted;
    });
    this._subscriptions.push(formSub);
  }

  ngOnDestroy ( ) {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  onSwitchLogin () {
    this.showRegister = !this.showRegister;
  }

  onSubmitRegisterForm () {
    this.submitAttempted = true;
    const relevantForm = _.omit(this.registerFormGroup.value, ['confirmPassword']);
    this._store$.dispatch(new accountActions.RegisterAction(relevantForm));
  }

  onSubmitLoginForm () {
    if (this.loginFormGroup.valid) {
      this._store$.dispatch(new accountActions.LoginAction(this.loginFormGroup.value));
    }
  }

  private passwordMatchValidator (formGroup: FormGroup) {
    return formGroup.get('password').value !== formGroup.get('confirmPassword').value
      ? formGroup.get('confirmPassword').setErrors({ mismatch: true}) : null;
  }

}
