import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Alert, Products, ShoppingItem } from 'src/app/types';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Omit<Products, 'selled'> = {id: 0, name: '', category: '', price:'', url:'', description:''};
  item: ShoppingItem = {id: 0, name: '', category: '', price:'', url:'', description:'', quantity:1, total:0};
  id: string|null = '0';
  quantity: number = 1;  

  alert: Alert = {type: 'success', message: 'Product added successfully to the shopping cart'};
  added: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(this.id).subscribe(data => this.product = data)
  }

  addToCart(): void {
    let total = Number(this.product.price.slice(1)) * this.quantity;

    this.item = { ...this.product,
      quantity: this.quantity,
      total: total
    }

    this.added = this.shoppingCartService.addItem(this.item)
  }
}
