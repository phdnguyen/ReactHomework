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

    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5714c28b5fe74b12ae85d0833e4863e6').then(res => this.setState({ data: res.data.articles[1], loading: false }))

  }


  render() {
    return (
      <View style={{ flex: 1 , alignContent: 'center'}}>
        <View style = {{height: 50}}></View>
        <ScaledImage uri =  'https://vignette.wikia.nocookie.net/logopedia/images/a/ad/Headline_NEWS_logo.png/revision/latest?cb=20151226141200' width = {Dimensions.get('screen').width}/>
        <View style ={{height: 100}}></View>
        <Text style = {styles.text}>{this.state.data.title}</Text>
        <View style = {{height: 50}}></View>
        <Text style = {styles.text}>{this.state.data.description}</Text>
        <View style = {{height: 50}}></View>
        <Text style = {styles.text}>{this.state.data.author}</Text>
        <View style = {{height: 50}}></View>
        <TouchableOpacity style = {{flex: 1}} onPress={ ()=> Linking.openURL(this.state.data.url) }>
        <Text style = {styles.text}>{this.state.data.url}</Text>
        </TouchableOpacity>
        {/* <ScaledImage uri = {this.state.data.urlToImage} width = {Dimensions.get('screen').width}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'BodoniSvtyTwoSCITCTT-Book',
    fontSize: 20
  }
})

export default App;