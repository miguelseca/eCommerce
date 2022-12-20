import { createAction, createActionGroup, props } from '@ngrx/store';
import { Product } from '../models/product';

export const ADD_TO_CART = createAction(
  '[Product Component] Adding to Cart',
  props<{ product: Product; qty: number }>()
);

export const CHANGE_QTY = createAction(
  '[Cart Component] Changing Item Quantity',
  props<{ productId: string; new_qty: number }>()
);

export const REMOVE_ITEM = createAction(
  '[Cart Component] Deleting Cart Item',
  props<{ productId: string }>()
);

export const CHECKOUT = createAction('[Cart Component] Checking Out');
