import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MontserratText from '../components/MontserratText';
import AppTheme from '../constants/AppTheme';

const SelectableTag = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    const selectTag = () => {
        props.onPress(props.tagName);
        setIsSelected(!isSelected);
    }

    if(isSelected) {
        return (
            <TouchableOpacity style={{...props.style, ...styles.selectedTag}} onPress={selectTag}>
                <MontserratText isBold={true} style={styles.selectedTagText}>{props.children}</MontserratText>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity style={{...props.style, ...styles.tag}} onPress={selectTag}>
                <MontserratText>{props.children}</MontserratText>
            </TouchableOpacity>
        );
    }
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
    selectedTag: {
        borderColor: AppTheme.primaryColor,
        borderWidth: 3,
        borderRadius: 5,
        marginHorizontal: 5,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTagText: {
        color: AppTheme.primaryColor
    }
});

export default SelectableTag;