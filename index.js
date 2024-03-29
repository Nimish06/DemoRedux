/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './store';
AppRegistry.registerComponent(appName, () => App);
store.subscribe(() => console.log(store.getState()));
