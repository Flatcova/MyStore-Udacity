import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Products } from 'src/app/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: Products[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {this.allProducts = data
    console.log(this.allProducts);
    })
  }
  

}
