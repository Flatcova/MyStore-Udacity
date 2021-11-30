import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Alert, Products, ShoppingItem } from 'src/app/types';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
    topProducts: Products[] = [];
    type: string = 'top selled';
    item: ShoppingItem = {id: 0, name: '', category: '', price:'', url:'', description:'', quantity:1, total:0};
  quantity: number = 1;
  alert: Alert = {type: 'success', message: 'Product added successfully to the shopping cart'};
  added: boolean = false; 

    constructor(private productsService: ProductsService, private shoppingCartService: ShoppingCartService) { }

    ngOnInit(): void {
      this.productsService.getTopProducts().subscribe(data => this.topProducts = data)
    }

    addProduct(product: Products): void {
      let total = Number(product.price.slice(1)) * this.quantity;
  
      this.item = { ...product,
        quantity: this.quantity,
        total: total
      }
  
      this.added = this.shoppingCartService.addItem(this.item)
    }

}
