const ordersEvents = require("./eventPool");
require('./vendor');
require('./driver');
const event = {
  pickupEvent:{
  time: "",
  },
  inTransiteEvent: {
    time: "",

  },
  deliverdEvent: {
    time: "",
  },
  orderInfo:{
    storeName:'',
    orderId:'',
    customerName:'',
    address:''
  },
  vendorThanks:""
};
ordersEvents.on("newOrder", async(payload)=>{
[event.orderInfo.storeName,event.orderInfo.orderId,event.orderInfo.customerName,event.orderInfo.address]=[payload.storeName,payload.orderId,payload.customerName,payload.address];
console.log(`There is  A new Order From ${event.orderInfo.storeName}`);
ordersEvents.emit('driverPickup',event.orderInfo);
});
ordersEvents.on('pickupInfo',payload=>{
    event.pickupEvent=payload;
    console.log(`Driver Pickedup Order Number :  ${event.pickupEvent.orderId}`);
});
ordersEvents.on('inTransiteInfo',payload=>{
    event.inTransiteEvent=payload.time;
    console.log(`Item : ${event.orderInfo.orderId} Is In Transite `);
});
ordersEvents.on('dropOffInfo',payload=>{
    event.deliverdEvent.time=payload.time;
    event.vendorThanks=`Thank You For Delivering ${event.orderInfo.orderId}`
    console.log(`Order Has been Deliverd for : ${event.orderInfo.customerName} At location : ${event.orderInfo.address}`)
});
