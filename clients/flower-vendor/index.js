const io=require('socket.io-client');
const socket=io('http://localhost:3000/caps');
const handlers=require('./handler');
const {
    handleNewOrderEmit,
    handleVendorOrderPickupEmit,
    handleVendorNotificaitonsEmit,
    handleDisplayNotifications
}=handlers;
socket.emit('connection');
//listen for all events around the system
socket.on('notify-system',(payload)=>{
    console.log(payload);
});
socket.on('allVendor-notifications',handleDisplayNotifications);
//emit new order
handleNewOrderEmit(socket);
//emit order ready for pickuo
handleVendorOrderPickupEmit(socket);
//emit the notificaitons system
handleVendorNotificaitonsEmit(socket); 




