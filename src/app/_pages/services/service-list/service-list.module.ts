import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceListRoutingModule } from './service-list-routing.module';
import { ServiceListComponent } from './service-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    ServiceListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class ServiceListModule { }