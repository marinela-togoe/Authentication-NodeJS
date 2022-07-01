const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


const mongoConnect = (callback) => {

    MongoClient.connect('mongodb+srv://marinela:ObQTp8q68yAdP0qq@cluster0.udspa.mongodb.net/?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        callback(client);
    })
    .catch(err => {
        console.log(err);  
    });
};

module.exports = mongoConnect;
