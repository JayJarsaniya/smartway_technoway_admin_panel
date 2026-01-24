import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html.component';

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
    HtmlComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    AngularEditorModule
  ]
})
export class HtmlModule { }
