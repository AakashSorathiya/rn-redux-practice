/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppNavigator from './AppNavigator';

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <AppNavigator />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
