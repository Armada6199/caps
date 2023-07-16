const ordersEvents = require('../../eventPool');
const { v4: uuid } = require('uuid');
const pickupEvent={
    time:'',
    orderId:'',
    msg:''
};
const {
  handlePickup,
  handleInTransite,
  handleDropOff
} = require('./handler'); // Replace 'your-module' with the actual file path

// Mock the event handler functions
jest.spyOn(ordersEvents, 'emit');

describe('Order Event Handlers', () => {
  beforeEach(() => {
    // Reset the pickupEvent object before each test
    pickupEvent.time = '';
    pickupEvent.orderId = '';
    pickupEvent.msg = '';
  });

  it('should handle pickup and emit "pickupInfo" event', async () => {
    const payload = {
      orderId: uuid(),
    };

    jest.useFakeTimers();

    await handlePickup(payload);


    jest.advanceTimersByTime(1000);

    expect(ordersEvents.emit).toHaveBeenCalledWith('inTransite');
  });

  it('should handle inTransite and emit "inTransiteInfo" event', () => {
    handleInTransite();

    expect(ordersEvents.emit).toHaveBeenCalledWith('inTransiteInfo', { time: expect.stringMatching(/^\d{2}:\d{2}:\d{2}/) });

    jest.advanceTimersByTime(2000);

    expect(ordersEvents.emit).toHaveBeenCalledWith('dropOff');
  });

  it('should handle dropOff and emit "dropOffInfo" event', () => {
    handleDropOff();

    expect(ordersEvents.emit).toHaveBeenCalledWith('dropOffInfo', { time: expect.stringMatching(/^\d{2}:\d{2}:\d{2}/) });
  });
});
