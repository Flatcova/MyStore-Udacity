import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Products } from 'src/app/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Products = {id: 0, name: '', category: '', price:'', selled: 0, url:'', description:''};
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
