import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  public notes = [];
  public error = null;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.notes(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.notes = data.data;
  }

}
