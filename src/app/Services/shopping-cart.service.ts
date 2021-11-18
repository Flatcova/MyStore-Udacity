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

  getItems() {
    return this.cartList;
  }

  addItem(product: ShoppingItem) {
    this.cartList.push(product);
    console.log(this.cartList);
    return true
  }

  removeItem() {

  }

  updateItem(){

  }

}
