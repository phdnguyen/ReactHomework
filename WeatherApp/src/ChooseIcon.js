import React, { Component } from 'react';
import { Image } from 'react-native';

class ChooseIcon extends Component {

  render() {

    if (this.props.weather === 'Clear') {
      return (
        <Image source={require('./images/icons/clear.png')} style={this.props.style} resizeMode="contain" />
      );
    } else if (this.props.weather === 'Clouds') {
      return (
        <Image source={require('./images/icons/clouds.png')} style={this.props.style} resizeMode="contain" />
      );
    } else if (this.props.weather === 'Snow') {
      return (
        <Image source={require('./images/icons/snow.png')} style={this.props.style} resizeMode="contain" />
      );
    } else if (this.props.weather === 'Rain') {
      return (
        <Image source={require('./images/icons/rain.png')} style={this.props.style} resizeMode="contain" />
      );
    } else {
      return (
        <Image source={require('./images/icons/rain.png')} style={this.props.style} resizeMode="contain" />
      );
    }

  }
}

export default ChooseIcon;