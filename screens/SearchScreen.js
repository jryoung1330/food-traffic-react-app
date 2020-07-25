import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodTruckCard from '../components/FoodTruckCard';
import Tag from '../components/Tag';
import { FOODTRUCKS, TAGS } from '../data/foodtrucks';
import { useSelector } from 'react-redux';
import SelectableTag from '../components/SelectableTag';
import AppTheme from '../constants/AppTheme';

const SearchScreen = (props) => {
    const [searchText, setSearchText] = useState('');
    const availableFoodTrucks = useSelector(
        (state) => state.foodtrucks.foodtrucks
    );
    const [filteredList, setFilteredList] = useState(availableFoodTrucks);
    const [filteredTags, setFilteredTags] = useState(TAGS);
    const [searchTags, setSearchTags] = useState([]);

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

    const filterByTags = (tagName) => {
        if (!searchTags.includes(tagName)) {
            searchTags.push(tagName);
        } else {
            searchTags.splice(searchTags.indexOf(tagName), 1);

        }

        let newFilteredList = [];
        if(searchTags.length > 0) {
            for(let i=0; i<FOODTRUCKS.length; i++) {
                let count = 0;
                for(let j=0; j<searchTags.length; j++) {
                    if(FOODTRUCKS[i].tags.includes(searchTags[j])) count++;
                }
                if(count === searchTags.length) newFilteredList.push(FOODTRUCKS[i]);
            }
        } else {
            newFilteredList = FOODTRUCKS;
        }

        setSearchTags(searchTags);
        setFilteredList(newFilteredList);
    }

    const renderTag = (itemData) => {
        return (
            <SelectableTag
                style={{ height: 100, minWidth: 100 }}
                onPress={() => filterByTags(itemData.item)}
                tagName={itemData.item}
            >
                {itemData.item}
            </SelectableTag>
        );
    };

    const performSearch = (param) => {
        setSearchText(param);

        if (param !== undefined) {
            var newFilteredList = [];
            FOODTRUCKS.forEach((f) => {
                if (f.displayName.toLowerCase().includes(param.toLowerCase()))
                    newFilteredList.push(f);
            });
            setFilteredList(newFilteredList);

            var newFilteredTagList = [];
            TAGS.forEach((t) => {
                if (t.toLowerCase().includes(param.toLowerCase()))
                    newFilteredTagList.push(t);
            });
            setFilteredTags(newFilteredTagList);
        }
    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <MaterialIcons name="search" size={25} />
                <TextInput
                    style={styles.searchInput}
                    blurOnSubmit
                    maxLength={32}
                    placeholder="Search By Name or Tag"
                    onChangeText={performSearch}
                    value={searchText}
                />
            </View>
            <View style={{ height: 120 }}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: 5 }}
                    data={filteredTags}
                    renderItem={renderTag}
                    keyExtractor={(item, index) => {
                        return item.toString();
                    }}
                    horizontal={true}
                />
            </View>
            <FlatList
                data={filteredList}
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
    header: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    searchInput: {
        width: '90%',
    },
});

export default SearchScreen;
