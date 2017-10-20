import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import {ProductService} from '../shared/product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listeProducts:Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products)=> this.listeProducts = products);
  }

}

  
