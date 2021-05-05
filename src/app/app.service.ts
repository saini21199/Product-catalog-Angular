import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './Product';

import {catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  private myerrorhandler(err:any){
    console.log(err);
    return throwError(err);
  }

  getProductItems() : Observable<Product[]> {
    const apiurl = environment.baseapiurl + "/product";
    const headers = {'content-type' : 'application/json'};

    return this.http.get<Product[]>(apiurl,{'headers': headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=>{
        return throwError(error)
      })
    );
  }

  postProduct(product : Product): Observable<Product>{
    Object.defineProperty(product, 'id',{enumerable:false});
    const apiurl = environment.baseapiurl + "/product";
    const headers ={'accept' : 'application/json', 'content-type': 'application/json'};
    return this.http.post<Product>(apiurl,product,{'headers': headers}).pipe(
      catchError(error => this.myerrorhandler(error))
    );
  }

  putProduct(product : Product): Observable<Product>{
    const apiurl = environment.baseapiurl + "/product/" + product.id;
    const headers ={'accept' : 'application/json', 'content-type': 'application/json'};
    return this.http.put<Product>(apiurl,product,{'headers': headers}).pipe(
      catchError(error => this.myerrorhandler(error))
    );
  }

  deleteProduct(productid : number): Observable<Product>{
    const apiurl = environment.baseapiurl + "/product/" + productid;
    const headers ={'accept' : 'application/json', 'content-type': 'application/json'};
    return this.http.delete<Product>(apiurl,{'headers': headers}).pipe(
      catchError(error => this.myerrorhandler(error)),
    );
  }

  private handleError(error:any){
    console.error(error);
    return throwError(error);
  }
}
