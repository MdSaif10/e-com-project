import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {
    productList : undefined | product[];
    productMessage : undefined | string ;
    // icon = faTrash;
  constructor(private product : ProductService) { }

  ngOnInit(): void {
    this.list();
}
deleteProduct(id:number){
     this.product.deleteProduct(id).subscribe((result) => {
      if(result){
        this.productMessage = 'Product is deleted' ;
        this.list();
      }
     });
     setTimeout(() => {
      this.productMessage = undefined
     }, 3000);

}

list(){
  this.product.productList().subscribe((result)=> {
    if(result){
      this.productList = result;
    }
  })
}
}
