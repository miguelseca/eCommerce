import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AuthState } from '../reducers';
import { AuthActions } from '../auth.actions';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private authStore: Store<AuthState>,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.form = fb.group({
      email: ['miguel.seca@gmail.com', [Validators.required]],
      password: ['1234', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;
    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          console.log(user);
          this.authStore.dispatch(AuthActions.login({ user }));
          this.dialogRef.close(true);
        })
      )
      .subscribe(noop, () => alert('Login Failed'));
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
