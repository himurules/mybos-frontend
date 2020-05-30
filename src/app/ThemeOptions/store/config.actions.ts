import { Injectable } from '@angular/core';
import { MYBOSUIState } from './index';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class ConfigActions {
  static CONFIG_GET = 'CONFIG_GET';
  static CONFIG_UPDATE = 'CONFIG_UPDATE';

  constructor(
    private ngRedux: NgRedux<MYBOSUIState>,
  ) { }

  getConfig() {
    this.ngRedux.dispatch({
      type: ConfigActions.CONFIG_GET,
    });
  }

  updateConfig(config): void {
    this.ngRedux.dispatch({
      type: ConfigActions.CONFIG_UPDATE,
      payload: config
    });
  }

}
