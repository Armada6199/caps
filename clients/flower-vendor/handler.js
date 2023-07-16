const ordersEvents=require('../../eventPool');
const uuid=require('uuid').v4;
const pickupEvent={
    time:'',
    orderId:'',
    msg:''
};

 async function handlePickup(payload){
    pickupEvent.time=new Date().toTimeString();
    pickupEvent.orderId=payload.orderId;
    pickupEvent.msg=`Driver Has Picked Up ${payload.orderId}`;
    ordersEvents.emit('pickupInfo',pickupEvent);
    setTimeout(()=>ordersEvents.emit('inTransite'),1000);
}
function handleInTransite(){
ordersEvents.emit('inTransiteInfo',{time:new Date().toTimeString()});
setTimeout(()=>ordersEvents.emit('dropOff'),2000);
};
function handleDropOff(){
    ordersEvents.emit('dropOffInfo',{time:new Date().toTimeString()})
}
module.exports={
    handlePickup,
    handleInTransite,
    handleDropOff,
}