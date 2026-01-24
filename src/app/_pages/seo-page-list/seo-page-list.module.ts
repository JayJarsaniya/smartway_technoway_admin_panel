import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SeoPageListRoutingModule } from './seo-page-list-routing.module';
import { SeoPageListComponent } from './seo-page-list.component';


@NgModule({
  declarations: [
    SeoPageListComponent
  ],
  imports: [
    CommonModule,
    SeoPageListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class SeoPageListModule { }
