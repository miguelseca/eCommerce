import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CategoryListComponent } from './components/pages/category-list/category-list.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductResolver } from './state/product.resolver';

const routes: Routes = [
  {path: '', component: HomepageComponent, resolve: {
    products: ProductResolver
  }},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:productid', component: ProductDetailComponent},
  {path: 'category/:categoryid', component: CategoryListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  
  {
    path: 'user',
    loadChildren: () => import('../app/authentication/auth.module').then(m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
