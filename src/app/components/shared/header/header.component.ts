import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, Subject, takeUntil } from 'rxjs';
import Cart from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value!: string;
  cart$!: Observable<Cart>;
  cartCount$!: Observable<number>;
  cartCountString$!: Observable<string>;

  constructor(
    private cartStore: Store<{ cartStore: Cart }>,
    private router: Router
  ) {
    this.cart$ = cartStore.select('cartStore');

    this.cartCount$ = this.cart$.pipe(map((cart) => cart.items.length));
    this.cartCountString$ = this.cart$.pipe(map((cart) => cart.items.length.toString()));

  }

  ngOnInit(): void {
  }

  onSearch() {
    this.router.navigate(['products']);
  }
}
