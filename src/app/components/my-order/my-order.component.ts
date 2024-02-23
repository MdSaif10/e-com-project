import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';




const ELEMENT_DATA: order[] = [
 
];

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
     orderData:order[]| undefined;

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.getOrderList();
    }
  
    deleteOrder(orderId:number|undefined){
      orderId &&  this.product.cancelOrder(orderId).subscribe((result)=>{
          this.getOrderList();
      })
  }
   getOrderList(){
    this.product.orderList().subscribe((result)=>{
      this.orderData=result;
      this.dataSource = result;
    })
   }
   displayedColumns: string[] = ['product', 'order', 'totalPrice', 'status','action'];
   dataSource = ELEMENT_DATA;
}
