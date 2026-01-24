import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioTagListRoutingModule } from './portfolio-tag-list-routing.module';
import { PortfolioTagListComponent } from './portfolio-tag-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    PortfolioTagListComponent
  ],
  imports: [
    CommonModule,
    PortfolioTagListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class PortfolioTagListModule { }
