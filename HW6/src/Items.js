import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.blocks}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.items.photos }} />
                    <View style = {{width: 20}}></View>
                    <View style={styles.info}>
                        <Text
                            style={styles.text}
                            numberOfLines={1}
                        >{this.props.items.title}
                        </Text>
                        <Text style = {{fontFamily: "ChalkboardSE-Regular"}}> Calories : {this.props.items.calories}</Text>
                        <Text style = {{fontFamily: "ChalkboardSE-Regular"}}> Nearest Restaurant: {this.props.items.distance}</Text>
                        <View style={styles.star}>
                            {Array.from(new Array(this.props.items.ratings)).map(item =>
                                <View style={{ flex: 0.2, height: 5, backgroundColor: 'forestgreen', margin: 1 }}></View>
                            )}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 10,
    },

    blocks: {
        height: 100,
        flexDirection: "row",
        // justifyContent: 'space-between' ,
        backgroundColor: 'rgba(255, 255, 255,0.75)' ,
        borderRadius: 15
    },

    image: {
       width: 100,
       height: 100,
       borderRadius: 20
    },

    info: {

        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-evenly"

    },

    text: {
       fontSize: 16,
       fontFamily: 'ChalkboardSE-Regular',
       color: 'black'

    },

    star: {
        flex: 0.3,
        marginLeft: 4,
        flexDirection: 'row'
      },

    underline: {
        height: 1,
        backgroundColor: "black"
    }


  })

export default Items;