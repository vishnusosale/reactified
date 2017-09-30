import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
  },
  textStyle: {
    fontSize: 20,
  },
};

export default class Header extends Component {
  render() {
    const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};
