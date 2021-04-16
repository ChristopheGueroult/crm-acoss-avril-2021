import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();
  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}
  public add(item: Order): void {
    this.ordersService.add(item).subscribe((res) => {
      // traiter ici les reponses de l'api
      this.ordersService.myMsg = 'Order added correctly';
      this.router.navigate(['orders']);
    });
  }
}
