const capsEmitter =require('../eventPool');
capsEmitter.on('vendor',getPackage)
async function getPackage(storeName){
    setTimeout(()=>{
        capsEmitter.emit('test',`tesssssssssting please work ${storeName}`)
        },3000);
}
module.exports=getPackage;