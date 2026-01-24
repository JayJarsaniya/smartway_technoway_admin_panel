import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesListComponent } from './case-studies-list.component';

const routes: Routes = [{ path: '', component: CaseStudiesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesListRoutingModule { }
