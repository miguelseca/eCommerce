import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import {responsiveOptions} from './responsiveOptions';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  
  featuredProducts: Product[] = [];
  responsiveOptions = responsiveOptions;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((prod) => {
        this.featuredProducts = prod;
      });
  }
}
