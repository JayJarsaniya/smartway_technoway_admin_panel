import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCaseStudiesRoutingModule } from './add-case-studies-routing.module';
import { AddCaseStudiesComponent } from './add-case-studies.component';


@NgModule({
  declarations: [
    AddCaseStudiesComponent
  ],
  imports: [
    CommonModule,
    AddCaseStudiesRoutingModule
  ]
})
export class AddCaseStudiesModule { }
