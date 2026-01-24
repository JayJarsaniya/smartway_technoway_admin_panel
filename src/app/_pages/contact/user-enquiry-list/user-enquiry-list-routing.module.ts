import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEnquiryListComponent } from './user-enquiry-list.component';

const routes: Routes = [{ path: '', component: UserEnquiryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEnquiryListRoutingModule { }
