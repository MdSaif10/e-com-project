import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, order } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
       totalPrice: number|undefined;
       cartData:cart[]|undefined;
       orderMsg:string|undefined

  constructor(private product:ProductService, private router:Router) { }

  ngOnInit() {
    this.product.currentCart().subscribe((result)=>{
      let price=0
      this.cartData=result;
      result.forEach((item)=>{
        if(item.quantity){
          price=price+ (+item.price* +item.quantity)
        }
      })
      this.totalPrice=price+(price/10)+100-(price/10);
      console.warn(this.totalPrice);
    })
  }
     orderNow(data:{email:string,name:string,contact:string,address:string,image:string}){
      let user =localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
     
     if(this.totalPrice){
      let orderData:order ={
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined,
        action: '',
        product: 0,
        order: ''
      }
      this.cartData.forEach((item)=>{
        setTimeout(()=>{
         item.id &&  this.product.deleteCartItems(item.id)
        }, 1000);
         
      })
      this.product.orderNow(orderData).subscribe((result)=>{
        if(result){
             this.orderMsg="Your order has been placed"
             setTimeout(()=>{
              this.router.navigate(['/my-orders'])
              this.orderMsg=undefined
             },2000)
          
        }
      })
    }
   
     }
}
