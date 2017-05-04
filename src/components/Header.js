// index.ios.js

import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#414040',
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        zIndex: 2
    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
    }
};

export default Header;
