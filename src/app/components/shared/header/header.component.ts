import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  value!: string;
  cartCount: string = '';
  endSubs$: Subject<any> = new Subject();

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntil(this.endSubs$))
      .subscribe((cart) => (this.cartCount = cart?.items.length.toString()));
  }

  onSearch() {
    this.router.navigate(['products']);
  }

  ngOnDestroy(): void {
    this.endSubs$.complete();
  }
}
