import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public workOrders = [];
  public error = null;
  public status = ['Rejected', 'Completed', 'In Progress', 'Awaiting Approval'];
  public showSpinner = true;
  public chosenStatus = [];
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.apiService.workOrders(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.randomNumber(data.data);
    this.workOrders = data.data;
    this.showSpinner = false;
  }

  randomNumber(data) {
    for (const [index, val] of data.entries()) {
      this.chosenStatus[index] = _.sample(this.status);
    }
  }
}
