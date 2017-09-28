// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

// Create a component
export default class Reactified extends Component {

  componentWillMount() {
    axios.get('https://api.giphy.com/v1/gifs/trending',
    {
      params: {
        api_key: "AlyTO7N4GWy48wQDTBDW5P4JFy0s7dnT"
      }
    })
    .then(response => console.log(response));
  }

  render() {
    return (
      <Header headerText={"Reactified"}/>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('reactified', () => Reactified);
