import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Products } from 'src/app/types';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
    allProducts: Products[] = [];
    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
      this.productsService.getTopProducts().subscribe(data => {this.allProducts = data
      console.log(this.allProducts);
      })
    }

}
