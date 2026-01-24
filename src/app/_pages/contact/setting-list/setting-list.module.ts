import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingListRoutingModule } from './setting-list-routing.module';
import { SettingListComponent } from './setting-list.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    SettingListComponent
  ],
  imports: [
    CommonModule,
    SettingListRoutingModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class SettingListModule { }
