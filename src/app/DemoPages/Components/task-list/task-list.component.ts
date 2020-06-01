import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  public workOrders = [];
  public error = null;
  public status = ['Rejected', 'Completed', 'In Progress', 'Awaiting Approval'];
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.workOrders(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.workOrders = data.data;
  }

  randomNumber() {
    return  Math.floor(Math.random() * this.status.length);
  }
}
