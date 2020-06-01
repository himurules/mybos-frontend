import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';


// Dashboards

import {DefaultComponent} from './DemoPages/Dashboards/default/default.component';

// Pages

import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';
import {BeforeLoginService} from './Services/before-login.service';
import {AfterLoginService} from './Services/after-login.service';
import {CasesComponent} from './DemoPages/Components/cases/cases.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      {
        path: '', component: DefaultComponent,
        canActivate: [AfterLoginService],
        data: {extraParameter: 'dashboardsMenu'}
      },
      {path: 'cases', component: CasesComponent, canActivate: [AfterLoginService], data: {extraParameter: 'casesMenu'}},
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      // User Pages

      {
        path: 'login',
        component: LoginBoxedComponent,
        canActivate: [BeforeLoginService],
        data: {extraParameter: ''}
      },
      {
        path: 'register',
        component: RegisterBoxedComponent,
        canActivate: [BeforeLoginService],
        data: {extraParameter: ''}
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordBoxedComponent,
        canActivate: [BeforeLoginService],
        data: {extraParameter: ''}
      },
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
