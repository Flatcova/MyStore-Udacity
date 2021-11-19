import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShoppingItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartList: ShoppingItem[] =[];
  public itemsList = new BehaviorSubject<any>([]);

  constructor() { }

  totalItems() {
    let totalItems: number = 0;
    this.cartList.forEach(e => {
      totalItems += e.quantity
    });
    return totalItems;
  }

  cartTotal() {
    let cartTotal: number=0;
    this.cartList.forEach(e => {
      cartTotal += e.total
    })
    return cartTotal;
  }

  getItems() {
    return this.cartList;
  }

  addItem(product: ShoppingItem) {
    const obj = this.cartList.findIndex((obj => obj.id == product.id))
    console.log(obj);
    
    if(obj >= 0){
      this.updateItem(product.id, product.quantity);
    }else{
      this.cartList.push(product);
    }
    
    console.log(this.cartList);
    return true
  }

  removeItem(id: number) {
    const obj = this.cartList.findIndex((obj => obj.id == id))
    this.cartList.splice(obj, 1);
  }

  updateItem(id: number, quantity: number){
    const obj = this.cartList.findIndex((obj => obj.id == id))
    const item = this.cartList[obj]
    item.quantity += quantity
    if( item.quantity == 0){
      this.removeItem(id)
    }else{
      item.total =  Number(item.price.slice(1)) * item.quantity
    }    
  }

  cleanItems() {
    this.cartList = [];
  }

}
