// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a component
export default class Reactified extends Component {
  render() {
    return (
      <Header headerText={"Reactified"}/>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('reactified', () => Reactified);
