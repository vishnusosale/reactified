import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}
Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20
  }
};
