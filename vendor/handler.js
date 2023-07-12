const capsEmitter=require('../eventPool');
const Driver=require('../driver');
capsEmitter.on('orderReadyToBePickedupFromVendor',orderReadyPickup);
function orderReadyPickup(payload){
    payload.storename=payload.storeName;
console.log(`${payload.storename} says order is ready for pickup`);
}
function alertVendorDriverPickedUp(payload){
console.log('driver has picked up the order from your vendor')
}
setTimeout(()=>
capsEmitter.emit('orderRecived','talabarmart')
,100);
    capsEmitter.on('alertVendorDriverPickedUp',alertVendorDriverPickedUp);

