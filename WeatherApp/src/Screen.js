import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import axios from 'axios';
import Items from './Items';
import moment from 'moment';
import ChooseIcon from './ChooseIcon';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            city: 'hanoi',
            text: '',
        };
    }
    componentWillMount() {
        this.getData()
    }

    async getData() {
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text === '' ? this.state.city : this.state.text}&appid=927d09bc49dbee6aac7f5cb1df707542`)
            .then(res => {
                this.setState({
                    data: res.data.list,
                    city: res.data.city.name,
                })
            }
        )
    }

    onChangeText = (text) => {
        this.setState({
            text
        })
    }

    convert(degree) {
        if (degree === 'C') return this.setState()
        else return this.setState()
    }

    renderItem = ({ item, index }) => {
        console.log(index)
        return <Items date={moment().add(index, 'd').format('DD/MM/YYYY')}
            temp={item.temp.max}
            weather={item.weather[0].main}
        />
    }

    _keyExtractor = (item, index) => item.id;


    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 10 }}></View>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                        <TextInput autoCorrect={true} onChangeText={this.onChangeText} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.getData()}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Search</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.city}>{this.state.city}</Text>
                <Text style={styles.day}>{moment().format('DD/MM/YYYY')}</Text>
                <View style={styles.today}>
                    <View>
                        <ChooseIcon weather={this.state.data[0].weather[0].main} style={{ width: 150, height: 150 }} />
                        <Text style={styles.todayInfo}>{this.state.data[0].weather[0].description}</Text>
                    </View>
                    <View>
                        <Text style={styles.todayTemp}>{this.state.data[0].temp.max}</Text>
                        <View>
                            <TouchableOpacity onPress={this.convert('C')}>
                                <Text style={{ fontSize: 20, color: 'white' }}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.convert('F')}>
                                <Text style={{ fontSize: 20, color: 'white' }}>°F</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: '10%' }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgb(57, 54, 75)',
    },

    search: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    searchBar: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 5,
        height: 5,
        borderRadius: 5,
        alignItems: 'center'
    },

    button: {
        height: 5,
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    box: {
        backgroundColor: 'rgb(46, 44, 61)',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
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

})
export default Screen;