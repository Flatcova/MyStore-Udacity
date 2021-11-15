import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Products } from 'src/app/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Products = {id: 0, name: '', category: '', price:0};
  id: string|null = '0';

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(this.id).subscribe(data => this.product = data)
  }

}
