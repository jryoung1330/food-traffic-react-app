import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppTheme from '../constants/AppTheme';

const MenuItemCard = (props) => {
    const menuItemHeight = props.height ? props.height : 180;
    const menuItemWidth = props.width ? props.width : Dimensions.get('window').width * 0.65;

    return (
        <TouchableOpacity
            style={{
                height: menuItemHeight,
                width: menuItemWidth,
                ...styles.menuItemContainer,
            }}
            onPress={props.onPress}
        >
            <ImageBackground
                style={styles.menuItemImg}
                source={{uri: props.menuItem.image}}
            >
                <Text style={styles.menuItemTitle}>{props.menuItem.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuItemContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    menuItemImg: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    menuItemTitle: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: AppTheme.secondaryColor,
        marginBottom: 5,
        fontFamily: 'montserrat',
        fontSize: 16,
    },
});

export default MenuItemCard;
