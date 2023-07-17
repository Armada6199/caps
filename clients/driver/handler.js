
async function handlePickupEmit(socket){
    setTimeout(()=>{
        socket.emit('driver-order-pickup',{driverName:'Mohamad Abdin',car:'toyota',number:'0790498975'});
    },1500);
}
async function handleInTransiteEmit(socket){
    setTimeout(()=>{
        socket.emit('order-inTransite')
        },3000);
}
async function handleDropoffEmit(socket){
    setTimeout(()=>{
        socket.emit('driver-dropOff')
        },4000);
}
async function handleGetAllNotificationsEmit(socket){
    setTimeout(()=>{
        socket.emit('get-All',1,'driver');
    },5000);

}
module.exports={
    handlePickupEmit,
    handleInTransiteEmit,
    handleDropoffEmit,
    handleGetAllNotificationsEmit,
}