import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Cart from '../models/cart';
import CartItem from '../models/cartItem';
export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cart$: Subject<Cart> = new Subject();
  cart!: Cart; 

  constructor() {}

  ngOnInit(): void {
  }

  getCart(): Cart {
  
    this.cart = JSON.parse(localStorage.getItem(CART_KEY)!);

    if (!this.cart) {
      this.cart = {items:[]};      
    } else {
      this.cart$.next(this.cart);
    }
    return this.cart;
  }

  setCartItem(cartItem: CartItem): void {
    // const cart = this.getCart();

    // const cartItemExists = cart.items.find(
    //   (item) => item.productId === cartItem.productId
    // );

    // if (cartItemExists) {
    //   cart.items.map((item) => {
    //     if (item.productId === cartItem.productId) {
    //       item.quantity += cartItem.quantity;
    //     }
    //   });
    // } else {
    //   cart.items.push(cartItem);
    // }

    // localStorage.setItem(CART_KEY, JSON.stringify(cart));
    // this.cart$.next(cart);
    // return cart;
  }
}
