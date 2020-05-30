import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
       backgroundColor: [this.random_rgba(), this.random_rgba(), this.random_rgba()],
    },
  ];

  constructor() { }

  ngOnInit() {
    const data = {
      data: [
        {c: [{v: 'Incident'}, {v: 1}]},
        {c: [{v: 'Defects'}, {v: 3}]},
        {c: [{v: 'Fire Service'}, {v: 1}]},
        {c: [{v: 'Irrigation'}, {v: 2}]},
        {c: [{v: 'Breaches'}, {v: 1}]},
        {c: [{v: 'Repair & Maintenance'}, {v: 75}]},
        {c: [{v: 'Defects - Apartments'}, {v: 1}]},
        {c: [{v: 'House keeping'}, {v: 1}]}
      ],
      ids: [3, 4, 8459, 11320, 11460, 14066, 14484, 19531]
    };
    for (const [key, value] of Object.entries(data.data)) {
       // console.log(`${key}`);
    }
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  random_rgba() {
    const o = Math.round;
    const r = Math.random;
    const s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }
}
