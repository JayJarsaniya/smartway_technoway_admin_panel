import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewListRoutingModule } from './review-list-routing.module';
import { ReviewListComponent } from './review-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    ReviewListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class ReviewListModule { }
