import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesListRoutingModule } from './case-studies-list-routing.module';
import { CaseStudiesListComponent } from './case-studies-list.component';


@NgModule({
  declarations: [
    CaseStudiesListComponent
  ],
  imports: [
    CommonModule,
    CaseStudiesListRoutingModule
  ]
})
export class CaseStudiesListModule { }
