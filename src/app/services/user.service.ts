import { Injectable } from '@angular/core';
import { Signup, login } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    invalidUserLogin= new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient,private router: Router) { }
  userSignUp(user:Signup){
    this.http.post("http://localhost:3000/users", user,{observe:'response'})
    .subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['']);
      }
    })
  }
  userLogin(data:login){
    this.http.get<Signup[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result)=>{
      if(result && result.body.length){
       this.invalidUserLogin.next(false)
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
      }else{
        this.invalidUserLogin.next(true)
      }
    })
  }
  userLoginReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['login']);
    }
  }
  
}
