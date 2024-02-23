import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { SellerAddProductsComponent } from "./seller-add-products/seller-add-products.component";
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';


const sellerRoutes:Routes =[
    {path:'seller',
    children: [
      
     
      {path:'seller-list', component:SellerListComponent},
      {path:'seller-update-product',component:SellerUpdateProductComponent}
    //   {path:'seller-home/seller-list/seller-update-product', 
    //   component:SellerUpdateProductComponent},
      
      
      
     
       
      
    ]},
]



@NgModule({
    declarations:[
      SellerUpdateProductComponent,
     SellerListComponent,
    
     
    
        
  ],
    imports: [ 
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(sellerRoutes)
        
    ],
   
    providers: [ ]
})

export class SellerModule{

}