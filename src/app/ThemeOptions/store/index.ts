import { combineReducers } from 'redux';
import { ConfigReducer } from './config.reducer';

export class MYBOSUIState {
  config;
};

export const rootReducer = combineReducers<MYBOSUIState>({
  config: ConfigReducer,
});


