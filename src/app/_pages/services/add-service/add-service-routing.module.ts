import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './add-service.component';

const routes: Routes = [
  { path: '', component: AddServiceComponent },
  { path: ':slug', component: AddServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddServiceRoutingModule { }