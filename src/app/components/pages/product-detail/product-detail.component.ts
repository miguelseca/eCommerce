import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../models/product';
import { MessageService } from 'primeng/api';
import Cart from 'src/app/models/cart';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_TO_CART } from 'src/app/state/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [MessageService],
})
export class ProductDetailComponent implements OnInit {
  productid!: string;
  product!: Product;
  quantity: number = 1;

  theCart!: Cart;
  cart_state$!: Observable<Cart>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private cartStore: Store<{ cartStore: Cart }>
  ) {
    this.cart_state$ = cartStore.select('cartStore');
    this.cart_state$.subscribe((s) => (this.theCart = s));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['productid']
        ? (this.productid = params['productid'])
        : (this.productid = '0');
    });
    this.getProductById(this.productid);
  }

  addProductToCart() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product added to cart',
    });

    this.cartStore.dispatch(
      ADD_TO_CART({
        product: this.product,
        qty: this.quantity,
      })
    );
  }

  onBuyNowClick() {
    this.addProductToCart();
    this.router.navigate(['cart']);
  }

  private getProductById(id: string) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
