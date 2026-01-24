import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryEnquiryListComponent } from './industry-enquiry-list.component';

const routes: Routes = [{ path: '', component: IndustryEnquiryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryEnquiryListRoutingModule { }
