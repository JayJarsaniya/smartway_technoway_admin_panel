import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyEnquiryListComponent } from './case-study-enquiry-list.component';

const routes: Routes = [{ path: '', component: CaseStudyEnquiryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudyEnquiryListRoutingModule { }
