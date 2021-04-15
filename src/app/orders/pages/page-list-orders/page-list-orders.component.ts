import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public states = Object.values(StateOrder);
  public title = 'List orders';
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public headers!: string[];
  // private sub: Subscription;
  constructor(
    private ordersService: OrdersService,
    private cd: ChangeDetectorRef
  ) {
    // this.sub = this.ordersService.testObservable$.subscribe((data) => {
    //   // console.log(data);
    // });
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }

  ngOnInit(): void {}
  public changeTitle(): void {
    this.title = 'Ma liste de commandes';
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((res) => {
      // gere les codes error retournés par l'api
      item.state = res.state;
      // lancer manuellement un change detection
      this.cd.detectChanges();
    });
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
