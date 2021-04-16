import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private msg!: string;
  public testObservable$ = new Observable((listX) => {
    listX.next('test');
  });
  // private collection
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // public set collection
  // public setCollection(col: Observable<Order[]>) {
  //   this.collection$ = col;
  // }
  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }
  public set myMsg(param: string) {
    this.msg = param;
  }

  // public get collection
  // public getCollection(): Observable<Order[]> {
  //   return this.collection$;
  // }
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }
  public get myMsg(): string {
    return this.msg;
  }

  // public change state
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = { ...item };
    obj.state = state;
    return this.update(obj);
  }

  // public update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // public add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // public delete item in collection

  // public get item by id in collection
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
