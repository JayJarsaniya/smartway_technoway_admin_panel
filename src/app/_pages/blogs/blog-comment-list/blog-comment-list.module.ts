import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCommentListRoutingModule } from './blog-comment-list-routing.module';
import { BlogCommentListComponent } from './blog-comment-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    BlogCommentListComponent
  ],
  imports: [
    CommonModule,
    BlogCommentListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class BlogCommentListModule { }
