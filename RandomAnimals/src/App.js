import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Linking,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import ScaledImage from './ScaledImage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }

  componentDidMount() {

    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=5714c28b5fe74b12ae85d0833e4863e6').then(res => this.setState({ data: res.data.articles[0], loading: false }))

  }


  render() {
    return (
      <View style={{ flex: 2, padding: 10 }}>
        <View style={{ height: 30 }}></View>
        <View style={{ height: 100, alignContent: 'center', alignItems: 'center' }}>
          <Image source={require('./logo.jpg')} style={{ height: '40%', width: '40%' }} />
        </View>
        <Text style={styles.textTitle}>{this.state.data.title}</Text>
        <View style={{ height: 50 }}></View>
        <Text style={styles.text}>{this.state.data.description}</Text>
        <View style={{ height: 20 }}></View>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: this.state.data.urlToImage }} style={{ height: 200, width: 200 }} />
        </View>
        <View style={{ height: 20 }}></View>
        <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.data.url)}>
          <Text style={styles.textLink}>Click here to view full article</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'American Typewriter',
    fontSize: 18
  },
  textTitle: {
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  textLink: {
    fontFamily: 'American Typewriter',
    fontSize: 18,
    textAlign: 'center'

  },


})

export default App;