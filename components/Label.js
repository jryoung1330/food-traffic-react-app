import React from 'react';
import { StyleSheet, View } from 'react-native';
import MontserratText from './MontserratText';

const Label = (props) => {
    return (
        <View style={{minWidth: props.width, ...styles.tag}}>
            <MontserratText style={styles.tagText}>{props.children}</MontserratText>
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Label;