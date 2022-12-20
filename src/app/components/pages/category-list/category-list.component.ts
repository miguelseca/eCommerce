import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  category!: number;
  products: Product[] = [];
  categories: Category[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['categoryid']
        ? (this.category = params['categoryid'])
        : (this.category = 1);
    });
    this.getProducts();
    this.getCategories();
    
  }

  private getProducts() {
    this.productService
      .getProducts().subscribe((prod) => {

        this.products = prod;
      });
  }
  private getCategories(): void {
    this.categoryService.getCategories().subscribe((cat) => {
      console.log(cat);

      this.categories = cat;
    });
  }
}
