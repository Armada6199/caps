const ordersEvents = require('../eventPool');
const { v4: uuid } = require('uuid');

const orderInfo = {
  storeName: 'Talabat Mart',
  orderId: uuid(),
  customerName: 'Mohamad Abdin',
  address: 'Amman Tabarbour',
};

describe('Order Info', () => {
  it('should have the correct store name', () => {
    expect(orderInfo.storeName).toBe('Talabat Mart');
  });

  it('should have a valid order ID', () => {
    expect(orderInfo.orderId).toMatch(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i);
  });

  it('should have the correct customer name', () => {
    expect(orderInfo.customerName).toBe('Mohamad Abdin');
  });

  it('should have the correct address', () => {
    expect(orderInfo.address).toBe('Amman Tabarbour');
  });
});