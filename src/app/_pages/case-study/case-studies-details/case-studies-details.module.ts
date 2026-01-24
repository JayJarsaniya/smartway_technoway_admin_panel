import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesDetailsRoutingModule } from './case-studies-details-routing.module';
import { CaseStudiesDetailsComponent } from './case-studies-details.component';


@NgModule({
  declarations: [
    CaseStudiesDetailsComponent
  ],
  imports: [
    CommonModule,
    CaseStudiesDetailsRoutingModule
  ]
})
export class CaseStudiesDetailsModule { }
