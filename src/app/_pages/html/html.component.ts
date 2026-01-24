import { Component, OnInit,AfterViewInit, ViewChild, ElementRef , NgZone } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Chart } from 'chart.js/auto';
import { start } from '@popperjs/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements AfterViewInit  {
  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef;

    htmlContent: string = '';

   // For Select Dropdown Code Start
    DopdownListIdSingle : any = []
    DopdownListIdMuultiple : any = []
    Dopdown_List : any = [
      {
        'value' : 1,
        'label' : 'Data 1'
      },
      {
        'value' : 2,
        'label' : 'Data 2'
      }
    ]
  // For Select Dropdown Code End

  //For datepicker Code Start

  datepickerConfig1:any=<BsDatepickerConfig> { containerClass: 'theme-default', dateInputFormat: 'DD/MM/YYYY', adaptivePosition: true, showWeekNumbers: false };

  dateRange1:any = Date

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
    private dtpicker : BsDatepickerConfig,
    private ngZone: NgZone
  ) { }

 ngOnInit(): void {
 }

  ngAfterViewInit(): void {
    this.dtpicker.dateInputFormat = 'MMMM / YYYY'
    this.ngZone.runOutsideAngular(() => { // jyare pan chart.js and ckeditor ek sathe use thay tyare aa code ni andar chart nu code lakhvanu

      // Bar Chart Code Start

      const Barchart:any = document.getElementById('Barchart');
      if (this.barChartCanvas) 
      {
        const Bardata = {
            labels: ['jan','feb','mar','apr','may','jun','jul'],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
          }

          new Chart(Barchart, {
            type: 'bar',
            data: Bardata,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
      }
   

      // Bar Chart Code End

      // Horizontal Bar Chart Code Start

      const HorizontalBarchart: any = document.getElementById('HorizontalBarchart');

      const HorizontalBardata = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(255, 159, 64, 0.8)', // Single color for all bars
          borderColor: 'rgb(255, 159, 64)', // Single border color for all bars
          borderWidth: 1
        }]
      };
      
      new Chart(HorizontalBarchart, {
        type: 'bar',
        data: HorizontalBardata, // Use the correct data object
        options: {
          plugins: {
            legend: {
              display: false // Hides the legend
            }
          },
          indexAxis: 'y' // Horizontal bar chart
        }
      });

      // Horizontal Chart Code End

      //Doughnut chart code start

      const Doughnutchart:any = document.getElementById('Doughnutchart');

      const Doughnutdata = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      new Chart(Doughnutchart, {
        type: 'doughnut',
        data: Doughnutdata,
      });

      //Doughnut chart code end

      //Line chart code start

      const Linechart:any = document.getElementById('Linechart');

      const Linedata = {
        labels: ['jan','feb','mar','apr','may','jun','jul'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      new Chart(Linechart,{
        type: 'line',
        data: Linedata,
      });

      // Line chart code end

      // Area chart code start

      const Areachart:any = document.getElementById('Areachart')
      new Chart(Areachart, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area color
            borderColor: 'rgba(54, 162, 235, 1)',       // Line color
            borderWidth: 2,
            fill: true,  // This makes the line chart an area chart
          }]
        },
        options: {
            plugins: {
                filler: {
                    propagate: true
                }
            }
        }
      });
    // Area chart code end
    })    
  }

}
