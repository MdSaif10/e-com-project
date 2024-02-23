import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Signup, cart, login, product } from "src/app/data-type";
import { ProductService } from "src/app/services/product.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-login',
    templateUrl:'login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
    showLogin:boolean=true;
    userLoginError: string="";
  

   constructor(private router:Router,private user: UserService, private product: ProductService){}
   ngOnInit(){
    this.user.userLoginReload();

    }

    onLogin(data:login){
      this.user.userLogin(data)
      this.user.invalidUserLogin.subscribe((result)=>{
        console.warn("apple",result)
        if(result){
          this.userLoginError="Please enter valid user details";
        }else{
          this.localCartToRemoteCart()
        }
      })
      
    }
  
   signUp(data:Signup){
    this.user.userSignUp(data)
   
   }
   openSignUp(){
    this.showLogin=false;
   }
   openLogin(){
    this.showLogin=true;
   }
   localCartToRemoteCart(){
     let data = localStorage.getItem('localCart');
     let user = localStorage.getItem('user');
     let userId= user && JSON.parse(user).id;
     if(data){
      let cartDataList = JSON.parse(data);
     
      
      cartDataList.forEach((product: product,index)=>{
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId,
        };
        delete cartData.id;
        setTimeout(()=>{
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.warn("item stored in db")
            }
          })
        } ,500);
          if(cartDataList.length===index+1){
            localStorage.removeItem('localCart');
          }
      });
      }
      setTimeout(()=>{
        this.product.getCartList(userId);
      }, 2000);
      

     }
   }




//    onRegister(data:object):void{
//     console.log(this.myReactiveForm.value)
    
//     this.seller.onRegister(data).subscribe((result)=>{
//         if(result)
//         this.router.navigate(['seller-home'])
       
//        });
// }
