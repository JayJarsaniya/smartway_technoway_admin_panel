import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPortfolioComponent } from './add-portfolio.component';

const routes: Routes = [{ path: '', component: AddPortfolioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPortfolioRoutingModule { }
