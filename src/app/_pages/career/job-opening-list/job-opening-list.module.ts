import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningListRoutingModule } from './job-opening-list-routing.module';
import { JobOpeningListComponent } from './job-opening-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    JobOpeningListComponent
  ],
  imports: [
    CommonModule,
    JobOpeningListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class JobOpeningListModule { }
