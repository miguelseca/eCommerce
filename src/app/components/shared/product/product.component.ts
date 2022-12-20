import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import Cart from 'src/app/models/cart';
import { Observable } from 'rxjs';
import { ADD_TO_CART } from 'src/app/state/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService],
})
export class ProductComponent {
  @Input() product!: Product;

  theCart!: Cart;
  cart_state$!: Observable<Cart>;

  constructor(
    private messageService: MessageService,
    private cartStore: Store<{ cartStore: Cart }>
  ) {
    this.cart_state$ = cartStore.select('cartStore');
    this.cart_state$.subscribe((s) => (this.theCart = s));
  }

  addToCart() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product added to cart',
    });

    this.cartStore.dispatch(
      ADD_TO_CART({
        product: this.product,
        qty: 1,
      })
    );
  }
}
