const customerInfo={
    customerName:'Mohamad Abdin',
    address:'Amman/Tabarbour',
    phoneNum:'0790498975'
}
async function handleNewOrderEmit(socket){
    socket.emit('new-order',{storeName:'Flowerser'});
}
async function handleVendorOrderPickupEmit(socket){
    setTimeout(()=>{
        socket.emit('vendor-order-pickup',customerInfo)
    },1000);
}
async function handleVendorNotificaitonsEmit(socket){
    setTimeout(()=>{
        socket.emit('get-All',1,'vendor');
    },6000);
};
async function handleDisplayNotifications(noti){
    console.log('Vendor Notifications');
    noti.forEach(e=>{
        console.log('-'.repeat(20));
        console.log(e);
        console.log('-'.repeat(20));
    })
};
module.exports={
    handleNewOrderEmit,
    handleVendorOrderPickupEmit,
    handleVendorNotificaitonsEmit,
    handleDisplayNotifications
}