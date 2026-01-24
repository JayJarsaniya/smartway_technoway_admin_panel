import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEnquiryListRoutingModule } from './user-enquiry-list-routing.module';
import { UserEnquiryListComponent } from './user-enquiry-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    UserEnquiryListComponent
  ],
  imports: [
    CommonModule,
    UserEnquiryListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class UserEnquiryListModule { }
