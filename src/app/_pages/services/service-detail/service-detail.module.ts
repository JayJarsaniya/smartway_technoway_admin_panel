import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailRoutingModule } from './service-detail-routing.module';
import { ServiceDetailComponent } from './service-detail.component';

@NgModule({
  declarations: [
    ServiceDetailComponent
  ],
  imports: [
    CommonModule,
    ServiceDetailRoutingModule
  ]
})
export class ServiceDetailModule { }