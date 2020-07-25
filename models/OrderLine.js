class OrderLine {
    constructor(
        id,
        orderId,
        menuItemId,
        quantity,
        basePrice
    ) {
        this.id = id;
        this.orderId = orderId;
        this.menuItemId = menuItemId;
        this.quantity = quantity;
        this.basePrice = basePrice;
    }
};

export default OrderLine;