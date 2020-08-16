import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    Modal,
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import MenuCarousel from '../components/MenuCarousel';
import MenuItemCard from '../components/MenuItemCard';
import MontserratText from '../components/MontserratText';
import Section from '../components/Section';
import Tag from '../components/Tag';
import TouchableComponent from '../components/TouchableComponent';
import AppTheme from '../constants/AppTheme';
import { FOODTRUCKS, MENUS } from '../data/foodtrucks';

const FoodTruckScreen = (props) => {
    const id = props.navigation.getParam('id');
    const foodtruck = FOODTRUCKS.find((f) => f.id === id);

    const menus = [];
    MENUS.forEach((m) => {
        if (m.foodTruckId === id) menus.push(m);
    });

    const [menu, setMenu] = useState(menus[0]);
    const [showModal, setShowModal] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [selectedMenuItem, setSelectedMenuItem] = useState(menu.menuItems[0]);
    const [itemName, setItemName] = useState('');
    const [fade, setFade] = useState(new Animated.Value(0));

    const renderMenu = (itemData) => {
        const menu = itemData.item;
        return (
            <Section
                alignTitleLeft={true}
                title={menu.description}
                titleFontSize={20}
                titleStyle={{ marginLeft: 10 }}
            >
                <FlatList
                    style={{ width: '100%' }}
                    data={menu.menuItems}
                    renderItem={renderMenuItem}
                    horizontal={true}
                    keyExtractor={(item, index) => {
                        return item.id.toString();
                    }}
                />
            </Section>
        );
    };

    const renderMenuItem = (itemData) => {
        return (
            <MenuItemCard
                onPress={() =>
                    turnOnModal(itemData.item.id, itemData.item.menuId)
                }
                menuItem={itemData.item}
                height={150}
                width={Dimensions.get('window').width * 0.5}
            />
        );
    };

    const renderTag = (itemData) => {
        return <Tag>{itemData.item}</Tag>;
    };

    const setIndexOfCarousel = (index) => {
        setSelectedMenuItem(menu.menuItems[index]);
    };

    const turnOnModal = (id, menuId) => {
        const menu = MENUS.find((m) => m.id === menuId);
        const item = menu.menuItems.find((i) => i.id === id);
        const index = menu.menuItems.indexOf(item);

        setMenu(menu);
        setStartIndex(index);
        setSelectedMenuItem(menu.menuItems[index]);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFade(new Animated.Value(0));
    };

    const _fade = (name) => {
        setItemName(name);
        Animated.timing(fade, {
            toValue: 1,
            duration: 500,
        }).start(() => {
            Animated.timing(fade, {
                toValue: 0,
                duration: 5000,
            }).start();
        });
    };

    return (
        <SafeAreaView style={styles.screen}>
            {/* Main Screen View Start */}
            <View style={styles.ftscreen}>
                <Image style={styles.img} source={{ uri: foodtruck.image }} />
                <View style={styles.tagList}>
                    <FlatList
                        data={foodtruck.tags}
                        renderItem={renderTag}
                        horizontal={true}
                        keyExtractor={(item, index) => item}
                    />
                </View>
                <FlatList
                    style={{ width: '100%' }}
                    nestedScrollEnabled
                    data={menus}
                    renderItem={renderMenu}
                    keyExtractor={(item, index) => {
                        return item.id.toString();
                    }}
                />
            </View>
            {/* Main Screen View End */}

            {/* Modal View Start */}
            <Modal
                animationType="slide"
                visible={showModal}
                onRequestClose={closeModal}
            >
                <View style={styles.modalScreen}>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <TouchableComponent onPress={closeModal}>
                            <MaterialIcons name="close" size={40} />
                        </TouchableComponent>
                    </View>
                    <MenuCarousel
                        menuItems={menu.menuItems}
                        index={startIndex}
                        renderer={setIndexOfCarousel}
                        animationStart={_fade}
                    />
                    <Animated.View
                        style={{ ...styles.notification, ...{ opacity: fade } }}
                    >
                        <MontserratText
                            isBold={true}
                            style={{ color: 'white' }}
                        >
                            {'Added ' + itemName + ' to Cart!'}
                        </MontserratText>
                    </Animated.View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

FoodTruckScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('id');
    const foodtruck = FOODTRUCKS.find((f) => f.id === id);
    return {
        headerTitle: foodtruck.displayName,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppTheme.secondaryColor,
    },
    ftscreen: {
        flex: 1,
    },
    img: {
        padding: 25,
        width: '100%',
        height: 250,
    },
    menuItemList: {
        width: '100%',
    },
    menuItemContainer: {
        height: 180,
        width: Dimensions.get('window').width * 0.6,
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
    map: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        marginTop: 10,
    },
    tagList: {
        height: 30,
        marginVertical: 10,
    },
    modalScreen: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 0,
    },
    scrollSections: {
        height: '50%',
        width: '100%',
    },
    section: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    closeMenu: {
        marginBottom:
            Platform.OS === 'ios' ? Dimensions.get('window').height * 0.1 : 0,
    },
    title: {
        fontSize: 22,
        fontFamily: 'montserrat-bold',
        marginBottom: 5,
    },
    carouselContainer: {
        height: Platform.OS === 'android' ? '35%' : '30%',
    },
    notification: {
        bottom: 0,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#008000',
    },
});

export default FoodTruckScreen;
