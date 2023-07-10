const capsEmitter=require('./eventPool');
require('./driver');
require('./vendor');
capsEmitter.on('vendor',(payload)=>{
    capsEmitter('test',{payload});
})
capsEmitter.on('vender package ready to be picked up ',(payload)=>{
payload.time=new Date().getFullYear();
console.log(payload);
});
capsEmitter.on('driver package ready for pickup',(payload)=>{
    payload.time=new Date().getFullYear();
    console.log(payload);
    });
capsEmitter.on('driver package pickedup',(payload)=>{
    payload.time=new Date().getFullYear();
    console.log(payload);
    });
capsEmitter.on('driver package delivered',(payload)=>{
    payload.time=new Date().getFullYear();
    console.log(payload);
    });
capsEmitter.on('vender package has been delivered',(payload)=>{
    payload.time=new Date().getFullYear();
    console.log(payload);
    });