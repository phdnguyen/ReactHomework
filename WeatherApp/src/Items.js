import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import ChooseIcon from './ChooseIcon';

class Items extends Component {
  render() {
    return (
      <View>
        <View style={styles.block}>
          <View style={{ width: 1, height: 5 }}></View>
          <Text style={styles.info}>{this.props.date}</Text>
          <View style={styles.box}>
            <Text style={styles.info}>{this.props.temp} ° </Text>
            <ChooseIcon weather={this.props.weather} style={styles.smallImage} />
          </View>
        </View>
        <View style={{ height: 10 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'rgb(46, 44, 61)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width * 3 / 4,
    height: Dimensions.get('screen').height * 1 / 10,
    borderRadius: 10
  },
  info: {
    fontSize: 16,
    color: 'white'
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  smallImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  }
})

export default Items;
