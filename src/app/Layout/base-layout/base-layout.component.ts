import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ConfigActions} from '../../ThemeOptions/store/config.actions';
import {ThemeOptions} from '../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  animations: [

    trigger('MYBOSUIAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            opacity: 0,
            display: 'flex',
            flex: '1',
            transform: 'translateY(-20px)',
            flexDirection: 'column'

          }),
        ], {optional: true}),
        query(':enter', [
          animate('600ms ease', style({opacity: 1, transform: 'translateY(0)'})),
        ], {optional: true}),

        query(':leave', [
          animate('600ms ease', style({opacity: 0, transform: 'translateY(-20px)'})),
         ], { optional: true })
      ]),
    ])
  ]
})

export class BaseLayoutComponent implements OnInit {

  @select('config') public config$: Observable<any>;
  public loggedIn: boolean;
  constructor(
    public globals: ThemeOptions,
    public configActions: ConfigActions,
  ) {}

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  ngOnInit() {
  }
}



