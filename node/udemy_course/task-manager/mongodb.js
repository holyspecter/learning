// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('Unable to connect to DB!');

    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then(res => console.log(res))
    // .catch(err => console.log(err));
    
    db.collection('tasks').deleteOne({
        description: 'Pay for rent'
    }).then(res => console.log(res))
    .catch(err => console.log(err));
});
