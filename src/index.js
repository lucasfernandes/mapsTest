import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { MapView } from 'react-native-maps';

import store from './store';

// import CurrentPositionMap from './components/CurrentPositionMap'
import StaticMap from './components/StaticMap';


const App = () => (
  <Provider store={store}>
    <StaticMap />
  </Provider>
);

export default App;
