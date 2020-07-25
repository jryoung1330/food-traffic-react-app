import React from 'react';
import { StyleSheet, View } from 'react-native';
import MontserratText from './MontserratText';

const Tag = (props) => {
    return (
        <View style={{...props.style, ...styles.tag}}>
            <MontserratText style={styles.tagText}>{props.children}</MontserratText>
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Tag;