import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { SellerComponent } from './components/Seller/seller.component';
import { LoginComponent } from './components/login/login.component';
import { AddressComponent } from './components/Profile/Address/address.component';
import { EditProfileComponent } from './components/Profile/Edit-Profile/edit-profile.component';
import { SellerHomeComponent } from './components/Seller/seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductsComponent } from './components/Seller/seller-add-products/seller-add-products.component';
import { SellerListComponent } from './components/Seller/seller-list/seller-list.component';
import { SellerUpdateProductComponent } from './components/Seller/seller-update-product/seller-update-product.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrderComponent } from './components/my-order/my-order.component';


const appRoutes: Routes = [
{path: ' ', redirectTo:'home', pathMatch :'full'},

    {path:'',
      component:HomeComponent},
//  { path: 'navigation', component: NavigationComponent },
     {path:'login',component:LoginComponent},
     
   
    {path:'cart', 
    component: CartComponent },
    
    {path: 'checkout',
    component:CheckoutComponent},

    {path: 'my-orders',
    component:MyOrderComponent},

   
    {path:'seller',
    component:SellerComponent},
    //  canActivate: [AuthGuard]},

    {path:'seller-home',
    component:SellerHomeComponent},
      // canActivate: [AuthGuard] },

    {
    path:'seller-add-products',
    component:SellerAddProductsComponent},
      // canActivate: [AuthGuard]},

    {path:'seller-list', 
    component:SellerListComponent},
    // canActivate: [AuthGuard]},

    {path:'seller-list/seller-update-product/:id', 
    component:SellerUpdateProductComponent},

      
   {path: 'search/:query' ,
   component: SearchComponent},

   {path: 'p-details/:productId',
   component : ProductDetailsComponent
   },

  {
    path: 'product' , 
  component:ProductComponent
},
  {  
    path:'user-auth',
    component: UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
