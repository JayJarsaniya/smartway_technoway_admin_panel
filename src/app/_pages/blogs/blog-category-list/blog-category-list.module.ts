import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCategoryListRoutingModule } from './blog-category-list-routing.module';
import { BlogCategoryListComponent } from './blog-category-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    BlogCategoryListComponent
  ],
  imports: [
    CommonModule,
    BlogCategoryListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class BlogCategoryListModule { }
