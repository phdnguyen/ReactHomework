import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { data } from './database.json'
import Items from './Items';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    renderItem = ({item}) => <Items 
    items={item} />

    keyExtractor = (item) => item.id

    render() {
        return (
            <View>
                <View style={{ height: 50 }}></View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    numColumns='1'
                    keyExtractor={this.keyExtractor}
                />
            </View>
            );
    }
}


export default Screen;