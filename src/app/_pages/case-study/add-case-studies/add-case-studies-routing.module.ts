import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCaseStudiesComponent } from './add-case-studies.component';

const routes: Routes = [{ path: '', component: AddCaseStudiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCaseStudiesRoutingModule { }
