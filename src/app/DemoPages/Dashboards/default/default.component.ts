import { Component, OnInit } from '@angular/core';
import {Color} from 'ng2-charts/ng2-charts';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {

  constructor() {}

  heading = 'Analytics Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public building = [
                      {
                        id: 9,
                        name: 'Arch',
                        address: '200 George Street',
                        state: 'NSW',
                        suburb: 'Sydney',
                        pr_status: 1,
                        pc_status: 1,
                        logo: 'https://data.mybos.com/9/2020-04-04/2HHYN46AYA.png',
                        photo: 'https://data.mybos.com/9/2020-03-12/3KBqHf14N4.jpg',
                        photoName: '3KBqHf14N4.jpg',
                        plan: 77755,
                        wCode: null,
                        country: 'AU'
                      },
    ];

  ngOnInit() {
  }

}
