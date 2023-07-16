const ordersEvents=require('../eventPool');
const handlers=require('./handler');
const {handlePickup,handleInTransite,handleDropOff}=handlers;
ordersEvents.on('driverPickup',handlePickup);
ordersEvents.on('inTransite',handleInTransite);
ordersEvents.on('dropOff',handleDropOff);