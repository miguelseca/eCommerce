import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, of, Subject, takeUntil } from 'rxjs';
import Cart from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { DialogModule } from 'primeng/dialog';
import { AuthState } from 'src/app/authentication/reducers';
import { AuthActions } from 'src/app/authentication/auth.actions';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/authentication/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  value!: string;
  cart$!: Observable<Cart>;
  cartCount$!: Observable<number>;
  cartCountString$!: Observable<string>;

  auth$!: Observable<AuthState>;
  showLogin: boolean = false;

  constructor(
    private cartStore: Store<{ cartStore: Cart }>,
    private authStore: Store<{ authStore: AuthState}>,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.cart$ = cartStore.select('cartStore');
    // this.auth$ = authStore.select('authStore');
    // this.showLogin$ = this.auth$.pipe(
    //   map((auth) => auth.showLogin)
    // );


    this.cartCount$ = this.cart$.pipe(map((cart) => cart.items.length));
    this.cartCountString$ = this.cart$.pipe(
      map((cart) => cart.items.length.toString())
    );
  }

  ngOnInit(): void {}

  onSearch() {
    this.router.navigate(['products']);
  }

  onLoginClick(): void {  
  
      this.dialog.open(LoginComponent);
  
  }

}
