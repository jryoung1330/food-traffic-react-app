import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MontserratText from '../components/MontserratText';
import AppTheme from '../constants/AppTheme';

const CheckoutScreen = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.map}>
                <MontserratText>
                    This is the map!
                </MontserratText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppTheme.secondaryColor,
    },
    map: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '40%',
    },
});

export default CheckoutScreen;
