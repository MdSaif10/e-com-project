import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
   productData :undefined | product;
   productMessage : undefined | string;

  constructor(private route : ActivatedRoute , private product:ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data)
      this.productData=data;
    })
  }
  onUpdate(data :any){
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product has updated"
      }
    })
    setTimeout(()=>{
        this.productMessage=undefined;
    },3000)
    console.warn(data);
  }

}
