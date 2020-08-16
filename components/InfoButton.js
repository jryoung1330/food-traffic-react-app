import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MontserratText from './MontserratText';

const InfoButton = (props) => {
    return (
        <TouchableOpacity style={styles.tag} onPress={props.onPress}>
            <MontserratText isBold={true} style={styles.tagText}>{"i"}</MontserratText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tag: {
        height: 20,
        width: 20,
        borderColor: 'lightblue',
        borderWidth: 2,
        borderRadius: 20,
        marginHorizontal: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagText: {
        color: 'lightblue'
    }
});

export default InfoButton;