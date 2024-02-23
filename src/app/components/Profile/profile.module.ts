import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditProfileComponent } from "./Edit-Profile/edit-profile.component";
import { AddressComponent } from "./Address/address.component";
import { ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";

const profileRoutes:Routes =[
    {path:'profile',
    children: [
      {path: '', component: ProfileComponent,}, 
      {path: 'address', component: AddressComponent}, 
      {path: 'edit-profile', component: EditProfileComponent}, 
    ]},
]



@NgModule({
    declarations:[
        EditProfileComponent,
        AddressComponent
     ],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(profileRoutes)
        
    ],
   
    providers: [ ]
})

export class ProfileModule{

}