import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
})
export class CasesComponent implements OnInit {
  heading = 'Cases';
  subheading = 'This is an example cases component.';
  icon = 'pe-7s-ticket icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public cases = [];
  public error = null;
  public size = 0;
  public page = 1;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.casesAll(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.cases = data.data;
    this.page = data.current_page;
    this.size = data.total;
  }

}
