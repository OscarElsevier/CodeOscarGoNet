let AllocateSalesOrder = require('./AllocateSalesOrderController');
let DataRepository = require('./data');

let dataRepository = new DataRepository();
let allocateSalesOrderService = new AllocateSalesOrder(dataRepository);
let salesOrders = allocateSalesOrderService.getAllSalesOrders();
let purchaseOrders = allocateSalesOrderService.getAllPurchaseOrders();

let ordersDelivered = allocateSalesOrderService.allocateSalesOrder(purchaseOrders, salesOrders);

ordersDelivered.forEach(element => {
    console.log("Sales Order # " + element.id + " will be delivered on: " + element.dateDelivered );
});
