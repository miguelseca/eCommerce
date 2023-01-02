import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";

import { Store } from '@ngrx/store';
import { AuthState } from '../authentication/reducers/index';
import { AuthActions } from "../authentication/auth.actions";

@Injectable()
export class ProductResolver implements Resolve<boolean> {
  
    constructor(private authStore: Store<AuthState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return of(true);
    //return this.authStore.dispatch(AuthActions.logout({}));
          
    ;
  }
}
