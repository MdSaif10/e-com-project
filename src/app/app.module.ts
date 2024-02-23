import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/Home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { SellerComponent } from './components/Seller/seller.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/Sign-up/signup.component';
import { ProfileModule } from './components/Profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './components/Seller/seller-home/seller-home.component';
import { SellerAddProductsComponent } from './components/Seller/seller-add-products/seller-add-products.component';
import { SellerModule } from './components/Seller/seller.module';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    NavigationComponent,
    HeaderComponent,
    ProfileComponent,
    SellerComponent,
    LoginComponent,
    SignupComponent,
    SellerHomeComponent,
    SellerAddProductsComponent,
    SidebarComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CheckoutComponent,
    MyOrderComponent,
   
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileModule,
    SellerModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
