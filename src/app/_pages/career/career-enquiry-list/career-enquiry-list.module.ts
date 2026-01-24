import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerEnquiryListRoutingModule } from './career-enquiry-list-routing.module';
import { CareerEnquiryListComponent } from './career-enquiry-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    CareerEnquiryListComponent
  ],
  imports: [
    CommonModule,
    CareerEnquiryListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class CareerEnquiryListModule { }
