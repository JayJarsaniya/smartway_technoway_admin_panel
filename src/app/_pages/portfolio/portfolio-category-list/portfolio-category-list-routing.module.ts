import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCategoryListComponent } from './portfolio-category-list.component';

const routes: Routes = [{ path: '', component: PortfolioCategoryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioCategoryListRoutingModule { }
