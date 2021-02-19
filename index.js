import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  PointLight,
  AmbientLight,
  
} from 'react-360';
import Entity from 'Entity';
import ThreeD from './components/ThreeD';
export default class HomeTour extends React.Component {
 
  render() {
    return (
      <View>
        
        <ThreeD/>
        
      </View>
    );
  }
};



AppRegistry.registerComponent('HomeTour', () => HomeTour);
