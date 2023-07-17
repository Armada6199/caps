const io = require('socket.io-client');
const { Server } = require('socket.io');
const { createServer } = require('http');

describe('Socket.io Connection', () => {
  let socket, server, httpServer;

  beforeAll((done) => {
    httpServer = createServer();
    server = new Server(httpServer);
    httpServer.listen(3000, () => {
      socket = io('http://localhost:3000/caps');

      // Mock the socket.on method to capture events
      socket.on = jest.fn((eventName, callback) => {
        if (eventName === 'notify-system') {
          callback('Test payload');
        } else if (eventName === 'allDriver-notifications') {
          callback([
            { message: 'Notification 1' },
            { message: 'Notification 2' },
            { message: 'Notification 3' },
          ]);
        }
      });

      // Emit the 'connection' event
      socket.emit('connection');
      done();
    });
  });

  afterAll(() => {
    socket.close();
    server.close();
  });

  test("socket.on('notify-system') should log the payload to the console", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(consoleSpy).toHaveBeenCalledWith('Test payload');
    consoleSpy.mockRestore();
  });

  test("socket.on('allDriver-notifications') should log all notifications to the console", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(consoleSpy).toHaveBeenCalledWith('Driver Notifications');
    expect(consoleSpy).toHaveBeenCalledWith('--------------------');
    expect(consoleSpy).toHaveBeenCalledWith({ message: 'Notification 1' });
    expect(consoleSpy).toHaveBeenCalledWith('--------------------');
    expect(consoleSpy).toHaveBeenCalledWith({ message: 'Notification 2' });
    expect(consoleSpy).toHaveBeenCalledWith('--------------------');
    expect(consoleSpy).toHaveBeenCalledWith({ message: 'Notification 3' });
    expect(consoleSpy).toHaveBeenCalledWith('--------------------');
    consoleSpy.mockRestore();
  });
});
