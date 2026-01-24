import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-seo-page-list',
  templateUrl: './seo-page-list.component.html',
  styleUrls: ['./seo-page-list.component.scss']
})
export class SeoPageListComponent implements OnInit {

  origin: string = location.origin

  SelectOption: any = []
  SelectOption1 = [
    {
      value: 1,
      label: 'Option 1'
    },
    {
      value: 2,
      label: 'Option 2'
    }
  ];

  datepickerConfig1: any = <BsDatepickerConfig>{ containerClass: '', dateInputFormat: 'DD/MM/ YYYY', adaptivePosition: true, showWeekNumbers: false };

  dateRange1: any = Date

  onOpenCalendar(container: any) {
    console.log(container);
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    }
    container.setViewMode('month');
  }

  onDateChange(event: any): void {
    // console.log('Start Date changed:', event);
  }

  //For datepicker Code End

  constructor(
    private dtpicker: BsDatepickerConfig
  ) { }


  ngOnInit(): void {
  }

}
