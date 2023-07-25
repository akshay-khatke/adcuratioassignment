

import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, StatusBar} from 'react-native';
import { Colors } from 'theme';
const { width, height } = Dimensions.get('window');

type SplashProps={

}

const SplashScreen:React.FC<SplashProps> = ({}) => {
    return (
        <View style={styles.container}>
           <StatusBar
        backgroundColor={Colors.primaryColor}
        barStyle="dark-content" />
            <Text style={{ color: Colors.secondaryColor, fontWeight: 'bold', fontSize: 20 }}>POSTS</Text>
            <Image source={require('../../assets/images/splashimage.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
    },
    image: {
        width: width,
        height: height / 2,
        resizeMode: 'contain', 
    },

    text: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor
    }
});

export default SplashScreen;
