const capsEmitter=require('./eventPool');
require('./driver');
require('./vendor');
const sleep=(ms=1500)=>new Promise((r)=>setTimeout(r,ms));
capsEmitter.on('orderRecived',async(payload)=>{
    await sleep();
     capsEmitter.emit('notifyDriver', {storeName:payload});
    await sleep();
     capsEmitter.emit('orderReadyToBePickedupFromVendor',{storeName:payload});
});

  capsEmitter.on('driverPickup',async(payload)=>{
    await sleep()
    capsEmitter.emit('alertVendorDriverPickedUp',{driverName:payload});
});
capsEmitter('orderDroppedOff',async(payload)=>{
    capsEmitter.emit('orderDropped Off')
})

module.exports=capsEmitter;