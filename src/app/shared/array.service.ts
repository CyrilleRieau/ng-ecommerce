import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ArrayService {
  private urlApiIri:string = 'http://localhost:8000/irrigations';
  private urlApiExp:string = 'http://localhost:8000/expositions';
  private urlApiRes:string = 'http://localhost:8000/resistances';
  private urlApiSoil:string = 'http://localhost:8000/soils';
  
  constructor (private http:HttpClient) {}
    
  getIrrig(){
    return this.http.get(this.urlApiIri);
  };
  getExposi(){
    return this.http.get(this.urlApiExp);
  };
  getResist(){
    return this.http.get(this.urlApiRes);
  };
  getSoil(){
    return this.http.get(this.urlApiSoil);
  };
}
