import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
/**
 * this service manage collection orders with all http methods
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * this property is used to display a msg when an item is added in collection correctly
   */
  private msg!: string;
  public testObservable$ = new Observable((listX) => {
    listX.next('test');
  });
  // private collection
  /**
   * this observable get collection and is accessible by get collection method
   */
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  private refreshCollection(): void {
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  // public set collection
  // public setCollection(col: Observable<Order[]>) {
  //   this.collection$ = col;
  // }

  /**
   * this my setter to initialize collection$
   */
  public set collection(col: BehaviorSubject<Order[]>) {
    this.collection$ = col;
  }
  /**
   * this method return collection$
   */
  public set myMsg(param: string) {
    this.msg = param;
  }

  // public get collection
  // public getCollection(): Observable<Order[]> {
  //   return this.collection$;
  // }
  public get collection(): BehaviorSubject<Order[]> {
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
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap((tab) => {
        this.refreshCollection();
      })
    );
  }

  // public add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap((tab) => {
        this.refreshCollection();
      })
    );
  }

  // public delete item in collection
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap((tab) => {
        this.refreshCollection();
      })
    );
  }

  // public get item by id in collection
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
