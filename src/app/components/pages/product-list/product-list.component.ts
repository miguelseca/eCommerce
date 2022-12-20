import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
      });
  }

  private getCategories() {
    this.categoryService
      .getCategories()

      .subscribe((cats) => {
        console.log(cats);

        this.categories = cats;
      });
  }

}
