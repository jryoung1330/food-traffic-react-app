import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const TouchableComponent = (props) => {
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        return (
            <TouchableNativeFeedback style={props.style} onPress={props.onPress}>
                {props.children}
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                {props.children}
            </TouchableOpacity>
        );
    }
};

export default TouchableComponent;