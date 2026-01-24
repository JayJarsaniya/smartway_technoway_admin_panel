import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceEnquiryListComponent } from './service-enquiry-list.component';

const routes: Routes = [{ path: '', component: ServiceEnquiryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceEnquiryListRoutingModule { }
