import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryEnquiryListRoutingModule } from './industry-enquiry-list-routing.module';
import { IndustryEnquiryListComponent } from './industry-enquiry-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    IndustryEnquiryListComponent
  ],
  imports: [
    CommonModule,
    IndustryEnquiryListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class IndustryEnquiryListModule { }
