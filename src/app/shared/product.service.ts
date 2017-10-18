import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  private urlApi:string = 'http://localhost:8000/products';
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
}
