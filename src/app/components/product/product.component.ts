import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allowNewSearch = false;
  allowNewProduct = true;
  constructor() {
    setTimeout(() => {
      this.allowNewSearch = true;
    },2000);
    setTimeout(() => {
      this.allowNewProduct =false;
    },2000);
   }

  ngOnInit() {
  }

}
