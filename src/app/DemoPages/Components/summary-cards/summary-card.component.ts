import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
})
export class SummaryCardComponent implements OnInit {
  public summary = {
    residents: 108,
    contractors: 30,
    assets: 113,
    'active cases': 7,
    'work orders sent': 394
  };
  constructor() {
  }

  ngOnInit() {
  }

}
