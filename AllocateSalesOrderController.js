module.exports = class AllocateSalesOrdersService{
    constructor(dataRepository)
    {
        this.dataRepository = dataRepository;    
    }

    getAllPurchaseOrders()
    {
        return this.dataRepository.getAllPurchaseOrders();
    }

    getAllSalesOrders()
    {    
        return this.dataRepository.getAllSalesOrders();
    }

    allocateSalesOrder(purchaseOrders, salesOrders)
    {
        try
        {
            let setInventoryStock = this.#setInventoryDates(purchaseOrders);
            let salesOrderDelivery = [];
            let index = 0;
            while(setInventoryStock.length > 0)
            {
                let salesOrder = salesOrders.peek();
                if(salesOrder.quantity <= setInventoryStock[0].quantity)
                {
                    if(salesOrder.created >= setInventoryStock[0].dateAvailable)    
                        salesOrderDelivery.push({"id": salesOrder.id, "dateDelivered": salesOrder.created.toString()});    
                    else
                        salesOrderDelivery.push({"id": salesOrder.id, "dateDelivered": setInventoryStock[0].dateAvailable.toString()});    
                    setInventoryStock.forEach(element => element.quantity = element.quantity - salesOrder.quantity);
                    salesOrders.dequeue();
                    
                }
                else
                {
                    setInventoryStock.shift();
                }
                
            }
    
            while(!salesOrders.isEmpty())
            {
                let salesOrder = salesOrders.peek();
                salesOrderDelivery.push({"id" : salesOrder.id, "dateDelivered" : "To Be Defined"});
                salesOrders.dequeue();
            }
    
            return salesOrderDelivery;
        }
        catch(err)
        {
            console.log(err.message);
            return null;
        }
       
    }

    #setInventoryDates(purchaseOrders)
    {
        let inventoryDates = [];
        let purchaseOrder = purchaseOrders.peek();
        let index = 0;
        inventoryDates.push({"dateAvailable": purchaseOrder.receiving, "quantity": purchaseOrder.quantity});
        purchaseOrders.dequeue();

        while(!purchaseOrders.isEmpty())
        {
            
            purchaseOrder = purchaseOrders.peek();
            inventoryDates.push({"dateAvailable": purchaseOrder.receiving, "quantity": purchaseOrder.quantity + inventoryDates[index].quantity});
            purchaseOrders.dequeue();
            index++;
        }

        return inventoryDates;
    }

}


