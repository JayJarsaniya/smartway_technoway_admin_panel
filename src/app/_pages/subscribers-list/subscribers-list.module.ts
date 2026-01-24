import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersListRoutingModule } from './subscribers-list-routing.module';
import { SubscribersListComponent } from './subscribers-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    SubscribersListComponent
  ],
  imports: [
    CommonModule,
    SubscribersListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class SubscribersListModule { }
