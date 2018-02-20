import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import App from './root/App.js';


AppRegistry.registerComponent('App', () => App );
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
})
