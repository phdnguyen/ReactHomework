import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Screen from '../components/Screen';
import reducers from '../reducers/'

const store = createStore(reducers);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    );
  }
}

export default App;