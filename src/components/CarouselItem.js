import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';

const CarouselItem = props => {
    const { movie } = props;
    const {
        itemStyle,
        rowStyle,
        titleStyle,
        genreStyle,
        imageStyle,
        blurb,
        imageBox
    } = styles;
    console.log(props);
    return (
        <View style={itemStyle}>
            <View style={imageBox}>
                <Image style={imageStyle} source={{ uri: movie.poster }} />
            </View>

            <View style={{ backgroundColor: 'transparent' }}>
                <Text style={rowStyle}>
                    <Text style={titleStyle}> {movie.title} - </Text>
                    <Text style={{ fontSize: 13, fontWeight: '700' }}>
                        {movie.rating}/
                    </Text>
                    <Text style={{ fontSize: 10 }}>10 </Text>
                </Text>
                <Text style={genreStyle}> {movie.genres} </Text>
                <Text numberOfLines={4} style={blurb}> {movie.plot} </Text>
            </View>

            <Button onPress={() => Linking.openURL(movie.imdburl)}>
                Watch Now
            </Button>
        </View>
    );
};

const styles = {
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 200
    },
    imageStyle: {
        height: 300,
        width: 180
    },
    imageBox: {
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#615D5D',
        shadowOffset: {
            width: -15,
            height: 20
        },
        shadowColor: 'black',
        shadowOpacity: 0.4
    },
    blurb: {
        marginTop: 5,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontSize: 13,
        fontWeight: '600'
    },
    rowStyle: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Avenir'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '700'
    },
    genreStyle: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontWeight: '100'
    }
};

export default CarouselItem;
