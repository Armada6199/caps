const io=require('socket.io-client');
const socket=io('http://localhost:3000/caps');
const handlers=require('./handler');
const { handlePickupEmit,
    handleInTransiteEmit,
    handleDropoffEmit,
    handleGetAllNotificationsEmit}=handlers;
socket.emit('connection');
socket.on('notify-system',(payload)=>{
    console.log(payload);
})
//get All Driver notifications
socket.on('allDriver-notifications',(payload)=>{
    console.log('Driver Notifications');
    payload.forEach(e=>{
        console.log('-'.repeat(20));
        console.log(e);
        console.log('-'.repeat(20));
    })
});
handlePickupEmit(socket);
handleInTransiteEmit(socket);
handleDropoffEmit(socket);
handleGetAllNotificationsEmit(socket);



