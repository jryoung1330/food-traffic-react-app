import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector } from "react-redux";
import FoodTruckCard from '../components/FoodTruckCard';
import AppTheme from '../constants/AppTheme';

const HomeScreen = (props) => {
    const availableFoodTrucks = useSelector(state => state.foodtrucks.foodtrucks);
    const favoriteFoodTrucks = useSelector(state => state.foodtrucks.favorites);
    let onlyShowFavs = false;
    let lastTap = null;

    const [foodTrucks, setFoodTrucks] = useState(availableFoodTrucks);

    const handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
            onlyShowFavs = !onlyShowFavs;
        } else {
            lastTap = now;
        }

        if(onlyShowFavs) {
            setFoodTrucks(favoriteFoodTrucks);
        } else {
            setFoodTrucks(availableFoodTrucks);
        }

    };

    const renderFoodTruck = (itemData) => {
        return (
            <FoodTruckCard
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'FoodTruck',
                        params: { id: itemData.item.id },
                    });
                }}
                foodtruck={itemData.item}
            />
        );
    };

    return (
        <SafeAreaView style={styles.screen}>
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                <View style={styles.map}>
                    <Text style={{ fontFamily: 'montserrat' }}>
                        This is the map!
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <FlatList
                style={{ width: '100%' }}
                data={foodTrucks}
                renderItem={renderFoodTruck}
                keyExtractor={(item, index) => {
                    return item.id.toString();
                }}
            />
        </SafeAreaView>
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

export default HomeScreen;
