import axios from 'axios';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity ,TextInput,Dimensions} from 'react-native';
import Items from './Items';
class Screen extends Component {
    state = {
        
        data: [],
        city: '',
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542').then(res => this.setState({ data: res.data.list }))
    }
    renderItem = ({ item }) => <Items
        comic={item}
         />

    keyExtractor = (item) => item.id
    render() {
        return (
            <View style = {styles.contain}>
                <TextInput style = {styles.input} onChangeText={(city) => this.setState({city})} value ={this.state.city}/> 
            </View>
        );
    }
}


const styles = StyleSheet.create({
    input:{
        width: Dimensions.get('screen').width*2/3;
        height: 40,
        borderRadius: 10,
    },
    contain:{
        alignItems: 'center',
        justifyContent: 'center',
    }


})

export default Screen;