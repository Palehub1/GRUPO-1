const mongoose =require('mongoose');

const getConnection = async () => {
try{
const url = 'mongodb://USER1:XZgd1Y3iyxmQ0Q2a@ac-kccu10z-shard-00-00.kgubpd6.mongodb.net:27017,ac-kccu10z-shard-00-01.kgubpd6.mongodb.net:27017,ac-kccu10z-shard-00-02.kgubpd6.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-oicscz-shard-0&authSource=admin&retryWrites=true&w=majority'

await mongoose.connect(url);

console.log('conexión exitosa');

}catch (error){
    console.log(error);
}



}

module.exports = {
    getConnection,
}