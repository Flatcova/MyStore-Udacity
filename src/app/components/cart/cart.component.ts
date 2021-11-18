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
  // item: ShoppingItem = {id: 0, name: '', category: '', price:0, url:'', description:'', quantity: 0};
  updated: boolean = false;
  

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.items = this.shoppingCartService.getItems();
    this.items.forEach(element => {
      this.total += element.total
    });
  }

  addToCart(item: ShoppingItem) {
    const updated = this.shoppingCartService.addItem(item);
  }
}
