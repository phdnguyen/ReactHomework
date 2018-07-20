import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { link = './images/rain.png' };
    }

    chooseIcon = () => {

        if (this.state.list === "rain") { link = './images/rain.png' }
        if (weatherType === 'clouds') { link = './images/clouds.png' }
        if (weatherType === 'rain') { link = './images/rain.png' }
        if (weatherType === 'snow') { link = './images/snow.png' }

    };

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.city}>{this.props.comic.city}</Text>
                <Text style={styles.day}>{this.props.comic.dt}</Text>
                <View style={styles.today}>

                    <View>
                        <Image style={styles.todayIcon} source={require('./images/clear.png')} />
                        <Text style={styles.todayInfo}>{this.props.comic.weather.description}</Text>
                    </View>

                    <View>

                        <Text style={styles.todayTemp}>{this.props.comic.temp.day}</Text>
                        <View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>°F</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                {/* <View style={styles.box}>

                    <Text style={styles.info}></Text>
                    <Text style={styles.info}></Text>
                    <Image source={require(this.state.link)} style={styles.smallImage} />

                </View> */}

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
        backgroundColor: rgb(46, 44, 61),
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