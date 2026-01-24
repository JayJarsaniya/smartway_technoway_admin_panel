import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioTagListComponent } from './portfolio-tag-list.component';

const routes: Routes = [{ path: '', component: PortfolioTagListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioTagListRoutingModule { }
