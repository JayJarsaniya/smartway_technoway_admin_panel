import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  SelectOption: any = []
  SelectOption1 = [
    {
      value: 1,
      label: 'Option 1'
    },
    {
      value: 2,
      label: 'Option 2'
    },
    {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    }, {
      value: 2,
      label: 'Option 2'
    },
  ];

  SelectOption_2: any = []
  SelectOption2 = [
    {
      value: 1,
      label: 'Option 1'
    },
    {
      value: 2,
      label: 'Option 2'
    }
  ];

  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef;

  htmlContent: string = '';

  //For datepicker Code Start

  datepickerConfig1: any = <BsDatepickerConfig>{ containerClass: 'theme-default', dateInputFormat: 'DD/MM/YYYY', adaptivePosition: true, showWeekNumbers: false };

  dateRange1: any = Date

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: '200px',
    minHeight: '0',
    placeholder: 'Enter text here...',
    translate: 'no',
    toolbarHiddenButtons: [['insertImage', 'insertVideo']]
  };


  constructor(
    private dtpicker: BsDatepickerConfig,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dtpicker.dateInputFormat = 'MMMM / YYYY'
    this.ngZone.runOutsideAngular(() => { // jyare pan chart.js and ckeditor ek sathe use thay tyare aa code ni andar chart nu code lakhvanu



    })
  }

}
