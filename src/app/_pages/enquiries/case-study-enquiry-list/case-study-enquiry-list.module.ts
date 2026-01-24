import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudyEnquiryListRoutingModule } from './case-study-enquiry-list-routing.module';
import { CaseStudyEnquiryListComponent } from './case-study-enquiry-list.component';


@NgModule({
  declarations: [
    CaseStudyEnquiryListComponent
  ],
  imports: [
    CommonModule,
    CaseStudyEnquiryListRoutingModule
  ]
})
export class CaseStudyEnquiryListModule { }
