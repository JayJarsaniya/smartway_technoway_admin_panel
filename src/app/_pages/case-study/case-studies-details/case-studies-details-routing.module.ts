import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesDetailsComponent } from './case-studies-details.component';

const routes: Routes = [{ path: '', component: CaseStudiesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesDetailsRoutingModule { }
