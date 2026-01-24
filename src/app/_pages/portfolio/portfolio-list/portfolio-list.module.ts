import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioListRoutingModule } from './portfolio-list-routing.module';
import { PortfolioListComponent } from './portfolio-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    PortfolioListComponent
  ],
  imports: [
    CommonModule,
    PortfolioListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class PortfolioListModule { }
