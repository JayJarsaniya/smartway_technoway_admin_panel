import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerEnquiryListComponent } from './career-enquiry-list.component';

const routes: Routes = [{ path: '', component: CareerEnquiryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerEnquiryListRoutingModule { }
