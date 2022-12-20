import { createReducer, on } from '@ngrx/store';

import { TODO } from './global.actions';

export const initialState = [];


export const GlobalReducer = createReducer(
   initialState,

//   on(exitCity, (state) => {
//     return { ...state, inCity: false };
//   }),

//   on(enterCity, (state) => {
//     return { ...state, inCity: true };
//   }),

//   on(setCurrentPrices, (state, { prices }) => {
//     return { ...state, prices: prices };
//   })

on(TODO, (state) => {
  return initialState;
})
 );
