import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { ArrayService } from '../shared/array.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  irrig;
  soil;
  expo;
  resist;
  newProduct:Product;
  @Output("onAdd")
  eventAjout:EventEmitter<Product> = new EventEmitter();
    
    constructor(private productService:ProductService, private arrayService:ArrayService) { 
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
        prodexpo:this.expo, 
        prodirrig:this.irrig, 
        prodresist:this.resist, 
        prodsoil:this.soil, 
        comments:'',  
      };
    }
  
    ngOnInit() {
      this.arrayService.getIrrig().subscribe((irrigs)=> this.irrig = irrigs);
      this.arrayService.getExposi().subscribe((expos)=> this.expo = expos);
      this.arrayService.getResist().subscribe((resists)=> this.resist = resists);
      this.arrayService.getSoil().subscribe((soils)=> this.soil = soils);
    }
  
    addProduct(){
      this.eventAjout.emit(this.newProduct);
    }
}
