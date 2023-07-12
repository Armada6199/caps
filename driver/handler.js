const capsEmitter=require('../eventPool');
const Vendor=require("../vendor");
capsEmitter.on('notifyDriver',orderNotify);
capsEmitter.on('orderDroppedOff',(payload)=>console.log(payload));
function orderNotify(payload){
    console.log(`You have recived a new order from ${payload.storeName}`)
};
setTimeout(()=>{
capsEmitter.emit('driverPickup','mohamad pickedup the order');
},3000)