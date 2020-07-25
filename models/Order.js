class Order {
    constructor(
        id,
        userId,
        total,
        subTotal,
        tax,
        additionalFees,
        discount,
        status,
        createDate,
        lastModified,
        orderLines
    ) {
        this.id = id;
        this.userId = userId;
        this.total = total;
        this.subTotal = subTotal;
        this.tax = tax;
        this.additionalFees = additionalFees;
        this.discount = discount;
        this.status = status;
        this.createDate = createDate;
        this.lastModified = lastModified;
        this.orderLines = orderLines;
    };
}

export default Order;