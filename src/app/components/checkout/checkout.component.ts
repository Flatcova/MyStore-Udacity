import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { ShoppingItem } from 'src/app/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: ShoppingItem[] = [];
  subtotal: number = 0;
  taxes: number =0;
  total: number=0;
  firstname: string ='';
  lastname: string = '';
  address: string = '';
  city: string = '';
  state: string ='';
  postalcode: string = '';
  phone: string = '';
  email: string ='';
  orderFinish: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.items = this.shoppingCartService.getItems()
    this.subtotal = this.shoppingCartService.cartTotal()
    this.taxes = this.subtotal * .0825
    this.total = this.subtotal + this.taxes
  }

  checkout(): void {
    this.orderFinish = true;
    this.shoppingCartService.cleanItems();
  }
}
