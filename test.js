import AllocateSalesOrder from './AllocateSalesOrderController.js';
import DataSource from './data.js';

jest.mock("./AllocateSalesOrderController.js");
jest.mock("./data.js");

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    AllocateSalesOrder.mockClear();
    DataSource.mockClear();
  });

  it('unit testing exmaples', () => {
    const mockDataSource = new DataSource();
    const mockAllocateSalesOrder = new AllocateSalesOrder(mockDataSource);
    const mockSalesOrder = mockAllocateSalesOrder.getAllSalesOrders();
    const mockPurchaseOrder = mockAllocateSalesOrder.getAllPurchaseOrders();
    const mockSalesOrderDelivery =  mockAllocateSalesOrder.allocateSalesOrder(mockPurchaseOrder, mockSalesOrder);

    expect(mockDataSource.getAllPurchaseOrders()).not.toBeNull();
    expect(mockDataSource.getAllSalesOrders()).not.toBeNull();
    expect(mockAllocateSalesOrder.getAllPurchaseOrders()).not.toBeNull();
    expect(mockAllocateSalesOrder.getAllSalesOrders()).not.toBeNull();
    expect(mockDataSource.getAllPurchaseOrders()).toEqual(mockPurchaseOrder);    
    expect(mockDataSource.getAllSalesOrders()).toEqual(mockSalesOrder);    
    expect(mockAllocateSalesOrder.getAllPurchaseOrders()).toEqual(mockPurchaseOrder);    
    expect(mockAllocateSalesOrder.getAllSalesOrders()).toEqual(mockSalesOrder);
    expect(mockAllocateSalesOrder.allocateSalesOrder(mockPurchaseOrder, mockSalesOrder)).toEqual(mockSalesOrderDelivery);
    expect(mockAllocateSalesOrder.allocateSalesOrder(mockPurchaseOrder, mockSalesOrder)).not.toBeNull();
    expect(AllocateSalesOrder).toHaveBeenCalledTimes(1);
    expect(DataSource).toHaveBeenCalledTimes(1);    
  });