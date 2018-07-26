import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SectionList, Dimensions} from 'react-native';
import Items from './Items';
import Categories from './Categories.js';
import {menu} from './sectionlist-db.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  renderItem = ({item}) => <Items data = {item}/>
  renderSectionHeader = ({section : {category}}) => <Categories category = {category}/>

  render() {
    return (
      <View style={styles.container}>
      <View style = {{height: Dimensions.get('screen').height*1/20}}></View>
      <SectionList
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={menu}
        keyExtractor={(item) => item.id}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgb(225,225,223)',
      flex: 1        
  },
})
export default App;