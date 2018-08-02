import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import { changeValueAction } from '../actions';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style = {styles.container}>

            <View style = {styles.numberBox}>
                <Text style = {styles.number}>{this.props.value}</Text>
            </View>

            <View style = {styles.buttons}>

            <TouchableOpacity onPress={() => this.props.changeValue(this.props.value + 1)}>
                <Image source = {{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL8SURBVGhD7Vo7bxNBGDxAFNCAeLQgQUUBQkJ0SEi0KagoKWgsnc8XOzRBCuZSoNi5hw2xEmSCb30xSrBxEgQB8fgHKZGoQBAKRJuWhuWbZe0Cn7Di2HiNdqSRv8nu6WZya++3lg0NjRFDIRM6fir85NvVL4JUB2l2Rw6PBkpWdDRIMT7r1Hi+sCzoTtc4hfmJMTlNfdwbj04giNto8gdb7wRLz9Y5/oYxOU196CCqQQdRDTqIatBBVIMOohqGHsRPsXxgVW5IadCNFwvJ8Cpqx3H2UtNXD+zKZTE2UT/gW+y5a1bPQd+3K8fp+pcwOvwgVvg1sMINKRFkm7iAOp8oH4IRGs+JMSs8C+0nKyY0vV6C9lJsbOhBAot9IC5LSUHC7xTOFTU9ATL/gzgJ7SUfnRTGk+w6tD9evfA7SHhl6EFcu3oaS0RKo2hGZ/AkpDSwjMqJ8kEphXnS+1Fzg+/xzPBi41pj39CDAH6ifKxgVk7thq1lFhcEY3HX7ITwKO3Gw0tH07hZv+g+bfLixzeChdW12Dm90s1UHWm7E4HNttypJT5XX+Wl+tquOb/5qv1EUMfN2SnniPCI7wGk7U74dvhtJlfjzvsXvPT5bduEKoQneINHeJW2O9EKcnNzXWl2DYKlNTsVcSdc6QsnXzfbN0cdN6cXwuNflxbe7PjKJu7N1QuztSftIKjj5vRCeHQzUVbajkc/P37jgvyTj99+obUhxgXBGDZNbJ7YRDEfmyo2V3ExAZtuMcnOS2kU0+wwNmcpRV+HzVvKwaFbELQx4ulI82hzoNH2QFNblBbtELVF0DTmoV1CDdDSWkE7JeXg0D0IGxNBaJlhPr2a0GhEhU6xW9Ct9ojqBeI2aoDmbaDBlXJw6BqE/vNo+VtrHT0cjgTtJ0BHBRwZcHSAxlGCjD9EDeCoQdfPSDk4dAsip6kPHUQ16CCqQQdRDTqIatBBVMN/E6T1g4Gcs8Tveo8FUYvT58TiETltNOBnWJaM//ETjvC2HNbQGA0Yxi8Peh1Wt8GARQAAAABJRU5ErkJggg=="}} style = {{height: 90, width: 90}}/>
            </TouchableOpacity>

            <View style = {{width: 70}}></View>

            <TouchableOpacity onPress={() => this.props.changeValue(this.props.value - 1)}>
                <Image source = {{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIuSURBVGhD7ZU9aBRBFMcnSgpttDClClpZqIXYBQRbCyvLFDYHezubix+gEGStTNydTTSByBF3ZlfBcAEV/GhiaWcppNWkkLRpbRzff3xnc3FtUqzyfvDI/JjdN//d2bkoQRAEQRAEQRAEYZ/Ju09PGu3em07/GLzQ5XkTuzfFjcGh4El5yWg7SNP0AHyha68W2q1iDIq4vF7Edo5VmdjepvlbrIp6z+MaVurvVtEDY/REb6wR5mhNrJ1F1Tn446ScQLZH0/UJeCO5dleouTfdchJOfyM4hTsbXLu78PlO/wicxitUuxgDuu4dhd9mxfxHFCsebBvXsGJ+Fz0wRk8aY63wIrAmHBngyARHRngjubaXw83T1YXgXTcVbqadglOQHi3w/fcOaZcX2u5gDOiNrhWx22TF/AaKlcK5TaoXrDRvd6hnFsbUM/SO7R041vy1tpuCI1NwyghvZP3a+sE8she98mPwfqc/PnwoQH4Yb4pVLfbc0cWoPsMatj9LqtOsykT2OIpVYQ7XsCrcO9xdgM8Ia7CG8MiAMTIhGzKGySZwNhai8lSba3h+/0jeq+9j6/6FymaqlGOPUiRuK5t95pcGL/3y4FUra4kKGU1SfeXYo5jEfnsw99ynn9/65S8b/snWh1YVMiEbMiIrxx5l+CA3P71udf31QfBpPZytfWrXWl3I2Php4bDT/4Efex2uNhUyZjP1PY69N//Fz68gCIIgCIIgCIIgCML+otRPrztLN+JCjP0AAAAASUVORK5CYII="}} style = {{height: 90, width: 90}}/>
            </TouchableOpacity>

            </View>

            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(243,222,138)'
    },
    numberBox: {
        margin: 30,
    },

    number: {
        fontFamily: 'GillSans-SemiBold',
        // fontWeight: 'bold',
        fontSize: 150,
        color: 'rgb(155,129,170)'
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

const mapAppStateToProps = state => ({
    value : state.value
  })
  
  const mapDispatchToProps = dispatch => ({
    changeValue: newValue => dispatch(changeValueAction(newValue))
  });
  
  export default connect(mapAppStateToProps, mapDispatchToProps)(Screen);