let Queue = require('./queue');
module.exports =  class dataRepository
{
    constructor(){}

    getAllSalesOrders()
    {
        let salesOrders = new Queue();
        salesOrders.enqueue({"id": 'S1', "created": new Date(2020, 0, 2),   quantity: 6});
        salesOrders.enqueue({"id": 'S2', "created": new Date(2020, 10, 5),  quantity: 2});
        salesOrders.enqueue({"id": 'S3', "created": new Date(2019, 11, 4),  quantity: 3});
        salesOrders.enqueue({"id": 'S4', "created": new Date(2020, 0, 20),  quantity: 2});
        salesOrders.enqueue({"id": 'S5', "created": new Date(2019, 11, 15), quantity: 9});
        return salesOrders;
    }

    getAllPurchaseOrders()
    {        
        let purchaseOrders = new Queue();
        purchaseOrders.enqueue({"id": 'P1', "receiving": new Date(2020, 0, 4),  quantity: 4});
        purchaseOrders.enqueue({"id": 'P2', "receiving": new Date(2020, 0, 5),  quantity: 3});
        purchaseOrders.enqueue({"id": 'P3', "receiving": new Date(2020, 1, 1),  quantity: 5});
        purchaseOrders.enqueue({"id": 'P4', "receiving": new Date(2020, 2, 5),  quantity: 1});
        purchaseOrders.enqueue({"id": 'P5', "receiving": new Date(2020, 1, 20), quantity: 7});
        return purchaseOrders;
    }
}
