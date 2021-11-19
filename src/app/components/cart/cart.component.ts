import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { ShoppingItem } from 'src/app/types';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: ShoppingItem[] = [];
  total: number = 0;
  taxes: number = 0;
  subtotal: number= 0;
  updated: boolean = false;
  

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.updateValues()
  }

  update(id: number, qty: number) {
    this.shoppingCartService.updateItem(id, qty)
    this.updateValues()
  }

  remove(id: number){
    this.shoppingCartService.removeItem(id)
    
    this.updateValues()
  }

  updateValues() {
    this.items = this.shoppingCartService.getItems();
    this.subtotal = 0; this.taxes = 0; this.total = 0;
    this.items.forEach(element => {
      this.subtotal += element.total
    });
    this.taxes = this.subtotal * .0825
    this.total = this.subtotal + this.taxes
  }
}
