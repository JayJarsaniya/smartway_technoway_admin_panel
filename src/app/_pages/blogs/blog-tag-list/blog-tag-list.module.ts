import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogTagListRoutingModule } from './blog-tag-list-routing.module';
import { BlogTagListComponent } from './blog-tag-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    BlogTagListComponent
  ],
  imports: [
    CommonModule,
    BlogTagListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class BlogTagListModule { }
