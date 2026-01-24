import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCategoryListComponent } from './blog-category-list.component';

const routes: Routes = [{ path: '', component: BlogCategoryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogCategoryListRoutingModule { }
