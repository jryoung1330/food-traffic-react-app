import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import MontserratText from '../components/MontserratText';
import OrderLine from '../components/OrderLine';
import AppTheme from '../constants/AppTheme';

const CartScreen = (props) => {
    const cart = useSelector(state => state.orders.order);

    const renderOrderLine = (itemData) => {
        return <OrderLine orderItem={itemData.item} />;
    };

    return cart.orderLines.length > 0 ? (
        <SafeAreaView style={styles.screen}>
            <FlatList
                style={{ width: '100%' }}
                data={cart.orderLines}
                renderItem={renderOrderLine}
                keyExtractor={(item, index) => item.id.toString()}
            />
            <View style={styles.checkoutBar}>
                <MontserratText isBold={true} style={{ fontSize: 16 }}>
                    {"Proceed to Checkout ($" + cart.total.toFixed(2) + ")"}
                </MontserratText>
            </View>
        </SafeAreaView>
    ) : (
        <View style={styles.emptyCartScreen}>
            <MontserratText>No items in cart!</MontserratText>
            <MontserratText style={styles.link}>
                View Order History
            </MontserratText>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    emptyCartScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollSection: {
        width: '100%',
        height: '97%',
    },
    checkoutBar: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 20,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: AppTheme.secondaryColor,
    },
    link: {
        textDecorationLine: 'underline',
        padding: 10,
    },
    cartRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default CartScreen;
