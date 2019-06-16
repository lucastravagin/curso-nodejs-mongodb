const mongoClient = require('mongodb').MongoClient


// Com Callback
// mongoClient.connect('mongodb://localhost', function(err, conn) {
//     if(err) return console.log('Erro de conexão')
//     global.database = conn.db('aula02')
// })

//Com Promises

mongoClient.connect('mongodb://localhost:27017')
    .then(conn => global.database = conn.db('aula02'))
    .catch(err => console.log(err))

function findCustomers(callback) {
    global.database.collection('costumers')
        .find({}).toArray(callback)
}

module.exports = { findCustomers }