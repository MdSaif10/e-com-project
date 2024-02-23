export interface Signup{
    name: string,
    email:string,
    password: string

}
export interface login{
    name:string;
     email:string,
     password: string

}

export interface product{
    name:string,
    price:number,
    color:string,
    category:string,
    image: string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId: undefined | number
}

export interface cart{
    name:string,
    price:number,
    color:string,
    category:string,
    image: string,
    description:string,
    id:number | undefined,
    quantity:undefined | number,
    userId:number,
    productId:number
}
export interface priceSummary{
    price:number,
    discount:number,
    tax: number,
    delivery: number,
    total: number
}
export interface order{
    image:string,
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:number,
    id:number|undefined,   
    action: string,
    product:number,
     order:string,  
  }