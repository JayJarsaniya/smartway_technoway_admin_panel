import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef;
  @ViewChild('barChartCanvas1') barChartCanvas1!: ElementRef;


  constructor(
    private dtpicker: BsDatepickerConfig,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const Barchart: any = document.getElementById('Barchart');
      if (this.barChartCanvas) {
        const Bardata = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Lost',
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
              backgroundColor: '#E0EFFF',
              borderColor: '#E0EFFF',
              borderWidth: 1,
            },
            {
              label: 'Gained',
              data: [30, 20, 40, 60, 35, 25, 20, 30, 20, 40, 60, 35, 25],
              backgroundColor: '#1362B3',
              borderColor: '#1362B3',
              borderWidth: 1,
            }
          ]
        };

        new Chart(Barchart, {
          type: 'bar',
          data: Bardata,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 14,
                  boxHeight: 12,
                  borderRadius: 12,
                  usePointStyle: false,
                  padding: 10,
                }
              },
            },
            scales: {
              x: {
                stacked: true,
                // categoryPercentage: 0.8,
                // barPercentage: 0.7,
                grid: {
                  color: '#fff',
                }
              },
              y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                  color: '#e8f0f8'
                }
              }
            }
          }
        });
      }
      const Barchart1: any = document.getElementById('Barchart1');
      if (this.barChartCanvas1) {
        const Bardata1 = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Lost',
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
              backgroundColor: '#E0EFFF',
              borderColor: '#E0EFFF',
              borderWidth: 1,
            },
            {
              label: 'Gained',
              data: [30, 20, 40, 60, 35, 25, 20, 30, 20, 40, 60, 35, 25],
              backgroundColor: '#1362B3',
              borderColor: '#1362B3',
              borderWidth: 1,
            }
          ]
        };

        new Chart(Barchart1, {
          type: 'bar',
          data: Bardata1,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 14,
                  boxHeight: 12,
                  borderRadius: 12,
                  usePointStyle: false,
                  padding: 10,
                }
              },
            },
            scales: {
              x: {
                stacked: true,
                // categoryPercentage: 0.8,
                // barPercentage: 0.7,
                grid: {
                  color: '#fff',
                }
              },
              y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                  color: '#e8f0f8'
                }
              }
            }
          }
        });
      }
    });
  }


}
