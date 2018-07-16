import React, {Component} from 'react';
import {ImageBackground, View} from 'react-native';
import Items from './Items';
import Screen from './Screen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <ImageBackground source={require('./images/background.jpg')} style={{ flex: 1 }}>
        <Screen></Screen>
      </ImageBackground>
    );
  }
}

export default App;