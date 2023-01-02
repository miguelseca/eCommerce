import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {User} from './model/user.model';

export const AuthActions = createActionGroup({
  source: 'Auth Module',
  events: { 
    'ShowLogin': emptyProps(),
    'HideLogin': emptyProps(),
    'Login': props<{user: User}>(),
    'Logout': emptyProps()
  },
});