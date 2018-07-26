import React, {Component} from 'react';
import {Platform,Image, Text, View, StyleSheet, Dimensions} from 'react-native';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style = {styles.container}>
                {/* // <View style = {{height: Dimensions.get('screen').height*1/20}}></View> */}
                <Image source={{ uri: this.props.data.image }} style={{height: 350, width: 350 }} />
                <View style={styles.title}>
                    <Text style = {{fontWeight: 'bold', fontSize: 16, fontFamily: 'Baskerville'}}>{this.props.data.title}</Text>
                </View>
                <View style={styles.rate}>

                {Array.from(new Array(this.props.data.rate)).map(item =>
                                <Image source = {{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJoSURBVGhD7dk7aBRRGMXx9YUiIoI2USOKj0Kxs1NQRCwkhY1gYyXWPhEFrbSwEC2MnYWgpa/CxlJQEh/4LCxEBEFFwRcKWqjJ/ygDw3A27M7MvTuX7IEfJEtm5rtfkrl35rb66SfNrMcznPj3XcK5jTH8wSJ9kGIWQgPQQGQvkowKzwYhd5Fk7iA/kL9YgqQyCBWeH4gcQFLZj+Ig5B6SyijcQPRbWoYkshTuzypzGEnkENwAMg+RRB7ADSBvBRqd5XCFFx1Fo3MErvCiJ2h0HsEV7qxCI7MSruB2jiNI5uEanuKV8R6fjd9whXbjG4rn/QRXxwuMYCNsdsJdpKluwGY+HsMd1DTfsQltMwvn4Q5uCjVb/48dZQe+wp2ol9RkNburaHHXySwdg5qq5pbOTJzBRIvA0NTM2lbM26HbobtQKGqemqhm1ho9pur+7S5aNzVNzQuWGTiFkH9qala0Z/tt+AhXSFlqjpqkZkXNWriCyjqJnmQXXEFl3URPcgWuoLJ+YQ6iRrOr1juuoCoqTXplMgRXSFWXETUX4Aqp6gui3bWm4gNcIXXYgijZAFeAo7nhIrqZc84hSk7DFVD0Fll3B3AL7ueK3mAKguclXAF5V6EnznxU3D78hDsmbx2CZg3chTO6Je/GRNGKQPuK7vhM8D3HY3AXFm0ZdPoqVPPQWbRbfD5H0LgnRr0OUgeno9tsxTsUzyl6/Roki1Hs4GtoC7pKFuA68ueVgwiSPchf6BLmoq7o/D+QnV93uSDZDG03a/bVy7wQ0fvg+9BAhvVBqGjTf/b/L4NlGlYjylzSTz+TI63WOAUI9tS3jYHKAAAAAElFTkSuQmCC"}} style = {{height: 20, width: 20}}/>
                            )}
                </View>

                <View style = {{height: Dimensions.get('screen').height*1/20}}></View>
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
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'rgb(156,181,234)'
    },

    title: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        margin: 20,
        backgroundColor: 'rgb(250,148,117)',
        flex: 1


    },

    rate: {
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row'

    }
})
export default Items;