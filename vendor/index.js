const ordersEvents=require('../eventPool');
const orderInfo=require('./handler');
setTimeout(()=>{
    ordersEvents.emit('newOrder',orderInfo);
},0);
