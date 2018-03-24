require('dotenv').config();
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(process.env.DB_URI, (err, client) => {
  if(err){
    console.log('Error in connecting the database');
  }
  console.log('Connection Successful');
  const db = client.db('TodoApp');

  // Delete many
  // db.collection('Todos').deleteMany({text: 'Hello'})
  //   .then(result => {
  //     console.log(result);
  //   })

  // Delete one
  db.collection('Todos').deleteOne({text: 'Some'})
    .then(result => {
      console.log('====================================');
      console.log(result);
      console.log('====================================');
    })

  // Find one and delete
  // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a7e62afecdcd42e3a08a1a3')})
  //   .then(result => {
  //     console.log('====================================');
  //     console.log(result);
  //     console.log('====================================');
  //   })

  //  db.collection('Todos').findOneAndDelete({completed: false})
  //   .then(result => {
  //     console.log('====================================');
  //     console.log(result);
  //     console.log('====================================');
  //   })
  // client.close();
});

