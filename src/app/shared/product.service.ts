import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from './product';
import {Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';


@Injectable()
export class ProductService {
  private urlApi:string = 'http://localhost:8000/products';
  private urlApiAdd:string = 'http://localhost:8000/addproduct/new';
private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  constructor (private http:HttpClient) {}
    
  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApi);
  };
/*
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.urlApi+ '/' + id);
  }
  addUser(user:User):Observable<User>{
      return this.http.post<User>(this.urlApi, user);
  }
  removeUser(id:number){
    return this.http.delete<void>(this.urlApi+ '/' + id);
  }
  updateUser(id:number, entity:User):Observable<User>{
    return this.http.patch<User>(this.urlApi+'/'+id, entity);
  }*/

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.urlApiAdd, product, this._options);
}

}
