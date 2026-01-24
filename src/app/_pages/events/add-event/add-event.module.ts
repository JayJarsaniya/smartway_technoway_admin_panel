import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEventRoutingModule } from './add-event-routing.module';
import { AddEventComponent } from './add-event.component';


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
    AddEventComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule,
    AngularEditorModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class AddEventModule { }
