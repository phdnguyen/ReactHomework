import React, {Component} from 'react';
import {Platform,Image, Text, View, StyleSheet, Dimensions} from 'react-native';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.category}>
                <Text style = {{fontWeight: 'bold', fontSize: 23, fontFamily: 'Baskerville'}}>{this.props.category}</Text>
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

    category: {
        padding: 5,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'rgb(156,181,234)'
    },

    title: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        margin: 20,
        backgroundColor: 'rgb(250,148,117)'


    },

    rate: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'rgb(203,189,51)'

    }
})
export default Categories;