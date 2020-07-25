import Order from '../../models/Order';
import OrderLine from '../../models/OrderLine';
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from '../actions/orders';
import { MENUS } from '../../data/foodtrucks';

const initalState = {
    order: new Order(1000, 1000, 0.0, 0.0, 0.0, 0.0, 0, "NEW", new Date(), new Date(), []),
};

// get the menu item for given menu item id
const getMenuItem = (menuItemId) => {
    for(let i=0; i<MENUS.length; i++) {
        for(let j=0; j<MENUS[i].menuItems.length; j++) {
            if(MENUS[i].menuItems[j].id === menuItemId) {
                return MENUS[i].menuItems[j];
            }
        }
    }
    return null;
}

// add up the cost of all the order lines
const calculateTotal = (orderLines) => {
    let total = 0;
    orderLines.forEach(orderLine => {
        total += (orderLine.basePrice * orderLine.quantity);
    });
    return total;
}

const orderReducer = (state = initalState, action) => {
    const newOrder = {...state.order};
    const orderLine = newOrder.orderLines.find(i => i.id === action.id);

    switch (action.type) {
        case ADD_TO_CART:
            // don't add item if already in the cart
            if(orderLine) {
                return state;
            }
            let menuItem = getMenuItem(action.id);
            const newOrderLine = new OrderLine(menuItem.id, 1000, menuItem.id, 1, menuItem.price);
            newOrder.orderLines.push(newOrderLine);
            newOrder.total = calculateTotal(newOrder.orderLines);
            return {...state, order: newOrder};
        case REMOVE_FROM_CART:
            newOrder.orderLines.splice(newOrder.orderLines.indexOf(orderLine), 1);
            newOrder.total = calculateTotal(newOrder.orderLines);
            return {...state, order: newOrder};
        case CHANGE_QUANTITY:
            orderLine.quantity = action.quantity;
            newOrder.orderLines.splice(newOrder.orderLines.indexOf(orderLine), 1, orderLine);
            newOrder.total = calculateTotal(newOrder.orderLines);
            return {...state, order: newOrder};
        default: return state;
    }
};

export default orderReducer;