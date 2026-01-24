import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogRoutingModule } from './add-blog-routing.module';
import { AddBlogComponent } from './add-blog.component';

import { FormsModule } from '@angular/forms';

// For Select Dropdown Code Start
import { NgSelectModule } from '@ng-select/ng-select';
// For Select Dropdown Code End

// For DatePikcer Code Start
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// For DatePikcer Code End

import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    AddBlogRoutingModule,
    AngularEditorModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    AngularEditorModule
  ]
})
export class AddBlogModule { }
