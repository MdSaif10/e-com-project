import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Signup, login } from "src/app/data-type";
import { SellerService } from "src/app/services/seller.service";

@Component({
    selector: 'app-seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.css']
})

export class SellerComponent implements OnInit {
    
    showLogin = false;
    authError:string = '' ;

    constructor(private seller: SellerService, private router: Router) { }
    ngOnInit() { }
    // this.myReactiveForm = new FormGroup({
    // 'name': new FormControl(null, Validators.required),
    // 'email': new FormControl(null, Validators.required),
    // 'password': new FormControl(null),
    // // 'repeat password' : new FormControl(null)
    // });{
    //     this.myReactiveForm = new FormGroup({
    //         'name': new FormControl(null, Validators.required),
    //         'email': new FormControl(null, Validators.required),
    //         'password': new FormControl(null),
    //     })
    // }

    signUp(data: Signup) {
        this.seller.onRegister(data)
    }
    // this.seller.onRegister(data).subscribe((result)=>{
    //     if(result)
    //     this.router.navigate(['seller-home'])

    //    });

    onLogin(data: login) {
        this.authError=" ";
        // console.warn(data)
        this.seller.sellerLogin(data)
        this.seller.isLoginError.subscribe((isError)=>{
           if(isError){
            this.authError="Email or password is not correct"
           }
        })
    }
    openLogin() {
        this.showLogin = true;
    }
    openSignUp() {
        this.showLogin = false;
    }

}
