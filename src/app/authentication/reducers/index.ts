import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../auth.actions';
import { User } from '../model/user.model';

export interface AuthState {
  user: User | undefined;
  isLogged: boolean;
  showLogin: boolean;
}

export const initialAuthState: AuthState = {
  user: undefined,
  isLogged: false,
  showLogin: false,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.showlogin, (state, action) => {
    return {
      ...state,
      showLogin: true,
    };
  }),
  
  on(AuthActions.hidelogin, (state, action) => {
    return {
      ...state,
      showLogin: false,
    };
  }),

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
      isLogged: true,
      showLogin: false,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
      isLogged: false,
      showLogin: false,
    };
  })
);
