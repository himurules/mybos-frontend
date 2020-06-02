import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent implements OnInit {
  public activityFeed = [];
  public error = null;
  public showSpinner = true;
  public classes = ['dot-warning', 'dot-success', 'dot-primary', 'dot-info', 'dot-dark'];
  public chosenClass = [];
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.activityFeed(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.randomClass(data.data);
    this.activityFeed = data.data;
    this.showSpinner = false;
  }

  randomClass(data) {
    for (const [index, val] of data.entries()) {
      this.chosenClass[index] = _.sample(this.classes);
    }
  }

}
