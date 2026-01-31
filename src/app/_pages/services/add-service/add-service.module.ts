import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddServiceRoutingModule } from './add-service-routing.module';
import { AddServiceComponent } from './add-service.component';

@NgModule({
  declarations: [
    AddServiceComponent
  ],
  imports: [
    CommonModule,
    AddServiceRoutingModule,
    FormsModule
  ]
})
export class AddServiceModule { }