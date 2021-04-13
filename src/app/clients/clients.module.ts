import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageEditClientComponent,
    PageAddClientComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
