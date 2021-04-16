import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';



import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component'
import { HeaderComponent } from './header/header.component';


import { HighlightDirective } from './highlight.directive'


import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from './exponential.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,


    ContactComponent,
    ProductsComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
    HeaderComponent,
    HighlightDirective,
    CartComponent,
    ExponentialPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
