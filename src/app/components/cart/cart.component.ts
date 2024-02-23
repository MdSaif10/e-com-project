import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    tax: 0,
    discount: 0,
    delivery: 0,
    total: 0
  }
  constructor(private product: ProductService, private router: Router) { }
  ngOnInit() {
    this.loadDetails();
  }
  checkout() {
    this.router.navigate(['/checkout'])
  }
  removeToCart(cartId: number | undefined) {
    cartId && this.cartData && this.product.removeToCart(cartId).subscribe((result) => {
      this.loadDetails();

    });
  }
  loadDetails() {
    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        price = price + (+item.price * +item.quantity);
      });
      this.priceSummary.price = price;
      this.priceSummary.tax = price / 10;
      this.priceSummary.discount = price / 10;
      this.priceSummary.delivery = 50;
      this.priceSummary.total = price + (price / 10) + 50 - (price / 10);
      if (!this.cartData.length) {
        this.router.navigate(['/'])
      }

    })
  }
}
