export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const addToCart = (menuItemId) => {
    return {
        type: ADD_TO_CART,
        id: menuItemId,
    };
};

export const removeFromCart = (menuItemId) => {
    return {
        type: REMOVE_FROM_CART,
        id: menuItemId,
    };
};

export const changeQuantity = (orderLineId, quantity) => {
    return {
        type: CHANGE_QUANTITY,
        id: orderLineId,
        quantity: quantity
    };
};
