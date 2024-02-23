import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { cart, product } from "src/app/data-type";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{
     
    popularProducts : undefined|product;
    trendingProducts : undefined|product;
   constructor(private product:ProductService,private activeRoute: ActivatedRoute,){}
   ngOnInit() {
       this.product.popularProducts().subscribe((data)=>{
         this.popularProducts=data;
       });
       this.product.trendingProducts().subscribe((data)=>{
        this.trendingProducts=data;
       });
    }
    
}