import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../Services/api.service";

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
})
export class ActivityFeedComponent implements OnInit {
  public activityFeed = [];
  public error = null;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.activityFeed(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.activityFeed = data.data;
  }

}
