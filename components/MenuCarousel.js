import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MenuItemDetail from './MenuItemDetail';

const MenuCarousel = (props) => {
    const startingIndex = props.index;
    const [index, setIndex] = useState(startingIndex);
    const menuItems = props.menuItems;

    const setIndexWrapper = (index) => {
        props.renderer(index);
        setIndex(index);
    };

    const _renderItem = (itemData) => {
        return (
            <MenuItemDetail
                menuItem={itemData.item}
                setShowModal={props.setShowModal}
                animationStart={props.animationStart}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                layout={'default'}
                data={menuItems}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                renderItem={_renderItem}
                onSnapToItem={(index) => setIndexWrapper(index)}
                firstItem={startingIndex}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselContainer: {
        width: '75%',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    carouselHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
    },
});

export default MenuCarousel;
