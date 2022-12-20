import { createReducer, on } from '@ngrx/store';
import Cart from '../models/cart';
import { ADD_TO_CART, CHANGE_QTY, CHECKOUT, REMOVE_ITEM } from './cart.actions';

const initialState: Cart = {
  items: [],
};

export const CartReducer = createReducer(
  initialState,

  on(ADD_TO_CART, (state, { product, qty }) => {
    let exists: boolean = false;
    let newCart: Cart = {
      ...state,
      items: state.items.map((x, i) => {
        if (product.id === x.product.id) {
          exists = true;
          return { ...x, quantity: x.quantity + qty };
        } else return { ...x };
      }),
    };

    if (!exists) {
      console.log('new products');
      newCart.items = [
        ...state.items,
        { productId: product.id, product: product, quantity: qty },
      ];
    }
    return newCart;
  }),

  on(CHECKOUT, (state) => {
    return initialState;
  }),

  on(CHANGE_QTY, (state, { productId, new_qty }) => {
    let newCart: Cart = {
      ...state,
      items: state.items.map((x) => {
        if (x.productId == productId) {
          return { ...x, quantity: new_qty };
        } else {
          return { ...x };
        }
      }),
    };
    return newCart;
  }),

  on(REMOVE_ITEM, (state, { productId }) => {
    let newCart: Cart = {
      ...state,
      items: state.items.filter((x) => x.productId != productId),
    };
    return newCart;
  })
);
