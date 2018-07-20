import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    chooseIcon() {

    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.city}></Text>
                <Text style={styles.day}></Text>
                <View style={styles.today}>

                    <View>
                        <Image style = {styles.todayIcon}/>
                        <Text style = {styles.todayInfo}></Text>
                    </View>

                    <View>

                        <Text style={styles.todayTemp}></Text>
                        <View>
                            <TouchableOpacity>
                                <Text style = {{fontSize: 20}}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style = {{fontSize: 20}}>°F</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View style={styles.box}>

                    <Text style={styles.info}></Text>
                    <Text style={styles.info}></Text>
                    <Image source={this.state.data.image} style ={styles.smallImage}/>

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: rgb(57, 54, 75),

    },

    box: {
        backgroundColor: rgb(46,44,61),
        justifyContent: 'row',
        alignItems: 'space-around'
    },

    city: {
        textAlign: 'center',
        fontSize: 20
    },

    day: {

        textAlign: 'center',
        fontSize: 18
    },

    today: {
        alignItems: 'space-between',
        justifyContent: 'row'
    },

    todayInfo: {
        fontSize: 20
    },

    todayTemp: {
        fontSize: 48

    },

    info: {
        fontSize: 16

    },

    smallImage: {
        
    }


})
export default Items;