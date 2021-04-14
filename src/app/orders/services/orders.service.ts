import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    console.log('mon service instancied');

    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // public set collection
  // public setCollection(col: Observable<Order[]>) {
  //   this.collection$ = col;
  // }
  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // public get collection
  // public getCollection(): Observable<Order[]> {
  //   return this.collection$;
  // }
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // public change state

  // public update item in collection

  // public add item in collection

  // public delete item in collection

  // public get item by id in collection
}
