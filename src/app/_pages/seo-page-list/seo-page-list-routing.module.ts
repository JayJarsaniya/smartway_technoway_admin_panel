import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoPageListComponent } from './seo-page-list.component';

const routes: Routes = [{ path: '', component: SeoPageListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoPageListRoutingModule { }
