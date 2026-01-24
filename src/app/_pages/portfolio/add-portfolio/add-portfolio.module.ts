import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPortfolioRoutingModule } from './add-portfolio-routing.module';
import { AddPortfolioComponent } from './add-portfolio.component';

import { FormsModule } from '@angular/forms';

// For Select Dropdown Code Start
import { NgSelectModule } from '@ng-select/ng-select';
// For Select Dropdown Code End

// For DatePikcer Code Start
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// For DatePikcer Code End

import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AddPortfolioComponent
  ],
  imports: [
    CommonModule,
    AddPortfolioRoutingModule,
    AngularEditorModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class AddPortfolioModule { }
