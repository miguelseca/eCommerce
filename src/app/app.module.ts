//===================== ANGULAR COMPONENTS =======================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//===================== PRIME NG =======================================
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { GalleriaModule } from 'primeng/galleria';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

//===================== COMPONENTS =======================================
//pages
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CategoryListComponent } from './components/pages/category-list/category-list.component';

//shared
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { GalleryComponent } from './components/shared/gallery/gallery.component';
import { ProductComponent } from './components/shared/product/product.component';
import { CategoriesBannerComponent } from './components/shared/categories-banner/categories-banner.component';
import { FeaturedProductsComponent } from './components/shared/featured-products/featured-products.component';

//NGRX
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './state/cart.reducer';
import { GlobalReducer } from './state/global.reducer';

//=========================================================================================================

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductComponent,
    BannerComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    GalleryComponent,
    ProductDetailComponent,
    ProductListComponent,
    CategoryListComponent,
    CartComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BadgeModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    CarouselModule,
    RatingModule,
    InputNumberModule,
    GalleriaModule,
    TooltipModule,
    CheckboxModule,
    RippleModule,
    StoreModule.forRoot({ cartStore: CartReducer, globalStore: GlobalReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
