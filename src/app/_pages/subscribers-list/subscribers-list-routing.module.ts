import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersListComponent } from './subscribers-list.component';

const routes: Routes = [{ path: '', component: SubscribersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribersListRoutingModule { }
