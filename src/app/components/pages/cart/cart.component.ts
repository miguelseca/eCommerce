import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import Cart from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CHANGE_QTY, REMOVE_ITEM } from 'src/app/state/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  @Output() remove = new EventEmitter<string>();

  products: Product[] = [];

  theCart!: Cart;
  cart_state$!: Observable<Cart>;

  cartCount = 0;
  endSubs$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartStore: Store<{ cartStore: Cart }>
  ) {
    this.cart_state$ = cartStore.select('cartStore');
    this.cart_state$.subscribe((s) => (this.theCart = s));
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy() {
    //this.endSubs$.next();
    this.endSubs$.complete();
  }

  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
      });
  }

  backToShop() {
    this.router.navigate(['/products']);
  }

  removeItem(id: string) {
    this.cartStore.dispatch(REMOVE_ITEM({ productId: id }));
  }

  getValue(event: Event): number {
    return parseInt((event.target as HTMLInputElement).value);
  }

  changeQuantity(productId: string, event: Event) {
    
    const input = parseInt((event.target as HTMLInputElement).value);
    let new_qty = 1;
    if (input > 1) new_qty = input;
    this.cartStore.dispatch(
      CHANGE_QTY({ productId: productId, new_qty: new_qty })
    );
 
  }
  getOrderSummary() {
    // this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((cart) => {
    //   this.totalPrice = 0;
    //   if (cart) {
    //     cart.items.map((item) => {
    //       this.ordersService
    //         .getProduct(item.productId)
    //         .pipe(take(1))
    //         .subscribe((product) => {
    //           this.totalPrice += product.price * item.quantity;
    //         });
    //     });
    //   }
    // });
  }


}
