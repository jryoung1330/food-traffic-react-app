import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import MenuItemCard from './MenuItemCard';
import MontserratText from '../components/MontserratText';
import { MENUS } from '../data/foodtrucks';
import { changeQuantity, removeFromCart } from '../store/actions/orders';
import TouchableComponent from './TouchableComponent';

const OrderLine = (props) => {
    const [quantity, setQuantity] = useState(props.orderItem.quantity);
    const orderLineId = props.orderItem.id;
    const dispatch = useDispatch();

    const increaseQty = useCallback(() => {
        dispatch(changeQuantity(orderLineId, quantity + 1));
    }, [dispatch, orderLineId, quantity]);

    const decreaseQty = useCallback(() => {
        dispatch(changeQuantity(orderLineId, quantity - 1));
    }, [dispatch, orderLineId, quantity]);

    const updateQty = (increment) => {
        if (increment) {
            setQuantity(quantity + 1);
            increaseQty();
        } else if (quantity > 1) {
            setQuantity(quantity - 1);
            decreaseQty();
        }
    };

    const removeLine = useCallback(() => {
        dispatch(removeFromCart(orderLineId))
    }, [dispatch, orderLineId]);

    const getMenuItem = () => {
        for (let i = 0; i < MENUS.length; i++) {
            for (let j = 0; j < MENUS[i].menuItems.length; j++) {
                if(MENUS[i].menuItems[j].id === props.orderItem.menuItemId) {
                    return MENUS[i].menuItems[j];
                }
            }
        }
    };

    const menuItem = getMenuItem();

    return (
        <View style={styles.menuRow}>
            {/* Menu Item Card */}
            <MenuItemCard
                height={120}
                width={Dimensions.get('window').width * 0.4}
                menuItem={menuItem}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Change Quantity Buttons */}
                <View>
                    <TouchableComponent onPress={() => updateQty(true)}>
                        <MaterialIcons name="arrow-drop-up" size={50} />
                    </TouchableComponent>
                    <TouchableComponent onPress={() => updateQty(false)}>
                        <MaterialIcons name="arrow-drop-down" size={50} />
                    </TouchableComponent>
                </View>

                {/* Quantity */}
                <MontserratText style={{ fontSize: 20 }} isBold={true}>
                    {quantity}
                </MontserratText>
                
            </View>
            <View>
                {/* Order Line Total */}
                <MontserratText style={{ fontSize: 20 }} isBold={true}>
                    ${(quantity * menuItem.price).toFixed(2)}
                </MontserratText>
            </View>
            <View>
                {/* Delete Button */}
                <TouchableComponent onPress={removeLine}>
                    <MaterialIcons name="close" size={40} color={'red'} />
                </TouchableComponent>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
    },
});

export default OrderLine;
