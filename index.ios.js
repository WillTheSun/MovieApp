import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import CarouselScroll from './src/components/Carousel';
import LinearGradient from 'react-native-linear-gradient';

const App = () => (
    <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}
    >

        <View style={{ flex: 1 }}>
            <Header headerText={'Box Office Hits'} />
            <CarouselScroll />
            <View style={styles.backgroundStyle} />
        </View>
    </LinearGradient>
);

const styles = {
    linearGradient: {},
    backgroundStyle: {
        backgroundColor: '#414040',
        flex: 1
    }
};

AppRegistry.registerComponent('moviesApp', () => App);
