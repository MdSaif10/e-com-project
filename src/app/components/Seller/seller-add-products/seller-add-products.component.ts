import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.css']
})
export class SellerAddProductsComponent implements OnInit {
    addProductMessage:string|undefined;
  constructor( private product: ProductService) { }

  ngOnInit() {
  }
    submit(data:product){
      
      this.product. addProduct(data).subscribe((result)=>{
        console.warn(result)
        if(result){
          this.addProductMessage="Product is added succesfully";
        }
      });

      setTimeout(()=> {
        this.addProductMessage=undefined
      },3000);
    }
}
