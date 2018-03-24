require('dotenv').config();
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(process.env.DB_URI, (err, client) => {
  if(err){
    console.log('Error in connecting the database');
  }
  console.log('Connection Successful');
  const db = client.db('TodoApp');

  // Find one and update

  // db.collection('Todos')
  // .findOneAndUpdate({_id: new ObjectID('5ab42d46f73c0c4b3cd79fab')},
  //  {$set: {completed: true}},{returnOriginal: false})
  //   .then(data => {
  //     console.log('====================================');
  //     console.log(data);
  //     console.log('====================================');
  //   })

  // db.collection('Users').findOneAndUpdate(
  //   {_id: new ObjectID('5a7e6c60ecdcd42e3a08a30c')},
  //   {$set: {name: 'Peter'}},
  //   {returnOriginal: false}
  // ).then(data => {
  //   console.log('====================================');
  //   console.log(data);
  //   console.log('====================================');
  // })

  // db.collection('Users').findOneAndUpdate(
  //   {_id: new ObjectID('5a7e6c60ecdcd42e3a08a30c')},
  //   {$inc: {age:1}},
  //   {returnOriginal: false}
  // ).then(data => {
  //   console.log('====================================');
  //   console.log(data);
  //   console.log('====================================');
  // })


  // client.close();
});

