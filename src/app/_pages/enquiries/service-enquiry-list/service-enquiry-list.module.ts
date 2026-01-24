import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceEnquiryListRoutingModule } from './service-enquiry-list-routing.module';
import { ServiceEnquiryListComponent } from './service-enquiry-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    ServiceEnquiryListComponent
  ],
  imports: [
    CommonModule,
    ServiceEnquiryListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class ServiceEnquiryListModule { }
