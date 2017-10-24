import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  newProduct:Product;
  @Output("onAdd")
  eventAjout:EventEmitter<Product> = new EventEmitter();
    
    constructor() { 
      this.newProduct = {
        name:'',
        description:'',
        cover:'',
        file:null, 
        price:null, 
        adding:null,
        brand:'', 
        isPremium:false,
        onSold:false,
        vendor:'', 
        note:null,
        numberOfProducts:null,
        numberOfVote:null,
        numberOfComments:null, 
        variety:'',
        seedPeriod:'',
        species:'',
        type:'',
        harvest:'',
        carving:false,
        treatment:false,
        fertilize:'',
        exposition:'', 
        irrigation:'', 
        resistance:'', 
        soil:'', 
        comments:'',  
      };
    }
  
    ngOnInit() {
      
    }
  
    addProduct(){
      this.eventAjout.emit(this.newProduct);
    }
}
