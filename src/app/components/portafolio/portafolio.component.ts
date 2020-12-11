import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { HeaderData } from '../../models/core.models';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
   options = { 
    plotOptions: {
      pie: {
        donut: {
          size: '80%'
        }
      }
    },
    dataLabels: {
    enabled: false
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    colors: ['#41CF69', '#58506BE6', '#58506BCC', '#58506BB3', '#58506B99', '#58506B80', '#58506B66', '#58506B4D', '#58506B33', '#58506B1A']
  }
  data:HeaderData={
    nombre:"Conoce tu portafolio",
    badge: "Estratega"
  }
  constructor() {
    this.chartOptions = {
      series: [15,10,10,10,9,9,8,7,7,15],
      chart: {   
        type: "donut",
        width: "100px"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }
      ]
    };

  }


  ngOnInit() {}

}
