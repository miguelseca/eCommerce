import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable} from 'rxjs';
import Cart from 'src/app/models/cart';
import { CHANGE_QTY, REMOVE_ITEM } from 'src/app/state/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$!: Observable<Cart>;
  cartCount$!: Observable<number>;
  cartTotal$!: Observable<number>;

  constructor(
    private router: Router,
    private cartStore: Store<{ cartStore: Cart }>
  ) {
    this.cart$ = cartStore.select('cartStore');

    this.cartCount$ = this.cart$.pipe(map((cart) => cart.items.length));

    this.cartTotal$ = this.cart$.pipe(
      map((cart) => {
        let sum = 0;

        for (let i = 0; i < cart.items.length; i++) {
          sum += cart.items[i].product.price * cart.items[i].quantity;
        }

        return sum;
      })
    );
  }

  ngOnInit(): void {}

  backToShop() {
    this.router.navigate(['/products']);
  }

  removeItem(id: string) {
    this.cartStore.dispatch(REMOVE_ITEM({ productId: id }));
  }

  changeQuantity(productId: string, event: Event) {
    const input = parseInt((event.target as HTMLInputElement).value);
    let new_qty = 1;
    if (input > 1) new_qty = input;
    this.cartStore.dispatch(
      CHANGE_QTY({ productId: productId, new_qty: new_qty })
    );
  }

}
