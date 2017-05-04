import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const styles = {
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        flex: 1
    },
    dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDotStyle: {
        backgroundColor: '#000',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
};

const Description = props => {
    return (
        <Text numberOfLines={1}>
            Aussie tourist dies at Bali hotel
        </Text>
    );
};

const MovieCard = props => {
    const { slide, image } = styles;

    return (
        <View style={slide}>
            <Image
                resizeMode="stretch"
                style={image}
                source={require('../img/1.jpg')}
            />
        </View>
    );
};

export default class extends Component {
    render() {
        return (
            <Swiper
                style={styles.wrapper}
                height={420}
                onMomentumScrollEnd={(e, state, context) =>
                    console.log('index:', state.index)}
                dot={<View style={styles.dotStyle} />}
                activeDot={<View style={styles.activeDotStyle} />}
                paginationStyle={{
                    bottom: -23,
                    left: null,
                    right: 10
                }}
                loop
            >
                <MovieCard title={Description} />

                <View
                    style={styles.slide}
                    title={
                        <Text numberOfLines={1}>
                            Big lie behind Nine’s new show
                        </Text>
                    }
                >
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={require('../img/2.jpg')}
                    />
                </View>
                <View
                    style={styles.slide}
                    title={
                        <Text numberOfLines={1}>
                            Why Stone split from Garfield
                        </Text>
                    }
                >
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={require('../img/3.jpg')}
                    />
                </View>
                <View
                    style={styles.slide}
                    title={
                        <Text numberOfLines={1}>
                            Learn from Kim K to land that job
                        </Text>
                    }
                >
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={require('../img/4.jpg')}
                    />
                </View>
            </Swiper>
        );
    }
}
