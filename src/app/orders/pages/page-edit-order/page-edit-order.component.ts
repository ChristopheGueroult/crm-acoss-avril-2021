import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$!: Observable<Order>;
  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      this.item$ = this.ordersService.getItemById(Number(params.get('id')));
    });
  }

  ngOnInit(): void {}
  public edit(item: Order): void {
    this.ordersService.update(item).subscribe((res) => {
      // traiter les res de l'api
      this.router.navigate(['orders']);
    });
  }
}
