import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppTheme from '../constants/AppTheme';
import TouchableComponent from './TouchableComponent';

const CustomButton = (props) => {
    return (
        <TouchableComponent onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor:
            Platform.OS === 'android' ? AppTheme.primaryColor : 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color:
            Platform.OS === 'android'
                ? AppTheme.secondaryColor
                : AppTheme.primaryColor,
        fontSize: 18,
        fontFamily: 'montserrat',
    },
});

export default CustomButton;
