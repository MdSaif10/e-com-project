import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {  Signup, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
   isSellerSignin= new BehaviorSubject<boolean>(false);
    isLoginError= new BehaviorSubject<boolean>(false)
   
  constructor(private http:HttpClient, private router:Router) { }
  onRegister(data:Signup){
   let result = this.http.post('http://localhost:3000/seller',
    data,{observe:'response'}).subscribe((result)=> {
      this.isSellerSignin.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    console.log("result",result);
   });
   
  return false ;
  }
  sellerLogin(data:login){
    let result=this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result : any)=>{
           console.warn(result)
      if(result && result.body && result.body.length){
        console.warn("user logged in")
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        
      }else{
        console.log("login failed");
       this.isLoginError.next(true)
      }

    })
    
    
   }
   
}

