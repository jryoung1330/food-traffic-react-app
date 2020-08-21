import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { FlatList, Image, StyleSheet, Text, View, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppTheme from '../constants/AppTheme';
import { toggleFavorite } from '../store/actions/foodtrucks';
import Tag from './Tag';
import TouchableComponent from './TouchableComponent';

const FoodTruckCard = (props) => {
    const foodTruckId = props.foodtruck.id;
    const isFavorite = useSelector((state) =>
        state.foodtrucks.favorites.some((f) => f.id === foodTruckId)
    );

    let displayTags = [];
    if (props.foodtruck.tags.length > 1) {
        displayTags = [props.foodtruck.tags[0], props.foodtruck.tags[1]];
    } else {
        displayTags = [props.foodtruck.tags[0]];
    }

    const dispatch = useDispatch();
    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(foodTruckId));
    }, [dispatch, foodTruckId]);

    const renderTag = (itemData) => {
        return <Tag>{itemData.item}</Tag>;
    };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHolder}>
                <TouchableComponent
                    style={{ width: '85%', justifyContent: 'center' }}
                    onPress={props.onPress}
                >
                    <View style={styles.cardLeft}>
                        {/* Vendor Image Button */}
                        <Image
                            style={styles.img}
                            source={{ uri: props.foodtruck.image }}
                        />

                        {/* Vendor Details */}
                        <View style={styles.cardDetails}>
                            <Text style={styles.title}>
                                {props.foodtruck.displayName}
                            </Text>
                            <FlatList
                                contentContainerStyle={{ height: 30 }}
                                data={displayTags}
                                renderItem={renderTag}
                                horizontal={true}
                                keyExtractor={(item, index) => item}
                            />
                        </View>
                    </View>
                </TouchableComponent>
                <View style={styles.cardRight}>
                    {/* Favorite Button */}
                    {isFavorite ? (
                        <TouchableComponent onPress={() => toggleFavHandler()}>
                            <MaterialIcons
                                color={AppTheme.primaryColor}
                                name="favorite"
                                size={26}
                            />
                        </TouchableComponent>
                    ) : (
                        <TouchableComponent onPress={() => toggleFavHandler()}>
                            <MaterialIcons
                                color={AppTheme.primaryColor}
                                name="favorite-border"
                                size={26}
                            />
                        </TouchableComponent>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        height: 100,
        width: '100%',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row',
    },
    cardHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Platform.OS === 'android' ? '85%' : '100%',
        overflow: 'hidden',
    },
    cardRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
    },
    img: {
        borderWidth: 1,
        borderColor: 'black',
        height: 75,
        width: 75,
        borderRadius: 100,
    },
    cardDetails: {
        marginHorizontal: 10,
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        marginVertical: 10,
        marginLeft: 5,
    },
});

export default FoodTruckCard;
