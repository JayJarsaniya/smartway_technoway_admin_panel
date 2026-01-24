import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobOpeningListComponent } from './job-opening-list.component';

const routes: Routes = [{ path: '', component: JobOpeningListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOpeningListRoutingModule { }
