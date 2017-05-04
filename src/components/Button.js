import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 13,
        fontWeight: '700',
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonStyle: {
        marginTop: 8,
        alignSelf: 'center',
        width: '60%',
        backgroundColor: '#979494',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#615D5D',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
