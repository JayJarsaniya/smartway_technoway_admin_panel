import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioCategoryListRoutingModule } from './portfolio-category-list-routing.module';
import { PortfolioCategoryListComponent } from './portfolio-category-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    PortfolioCategoryListComponent
  ],
  imports: [
    CommonModule,
    PortfolioCategoryListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class PortfolioCategoryListModule { }
