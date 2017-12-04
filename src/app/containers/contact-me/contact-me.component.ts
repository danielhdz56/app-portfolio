// ANGULAR
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RXJS
// MODELS

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formGroup = this._initFormGroup();
  }

  ngOnInit() {
  }

  private _initFormGroup () {
    return this._formBuilder.group({
      title: [null, Validators.required],
      body: [null, Validators.required],
    });
  }

}
