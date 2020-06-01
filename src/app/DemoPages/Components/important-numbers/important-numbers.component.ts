import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-important-numbers',
  templateUrl: './important-numbers.component.html',
})
export class ImportantNumbersComponent implements OnInit {
  public importantNumbers = [];
  public error = null;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.importantNumbers().subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.importantNumbers = data.data;
  }

}
