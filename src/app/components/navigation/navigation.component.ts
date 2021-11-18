import { Component, DoCheck, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck{
  cartItems: number = 0;
  cartTotal: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cartItems = this.shoppingCartService.totalItems()
    this.cartTotal = this.shoppingCartService.cartTotal()
  }

}
