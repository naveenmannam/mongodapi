require('dotenv').config();
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(process.env.DB_URI, (err, client) => {
  if(err){
    console.log('Error in connecting the database');
  }
  console.log('Connection Successful');
  const db = client.db('TodoApp');


  // Find All
  // db.collection('Todos').find().toArray().then(data => {
  //   console.log('All Todos');
  //   console.log(JSON.stringify(data, undefined, 2));
  // }, err=> {
  //   console.log('Error finding files.')
  // })

  // Find by condition
  // db.collection('Todos').find({completed: false}).toArray()
  //   .then(data => {
  //     console.log('All False Records');
  //     console.log(JSON.stringify(data, undefined, 2))
  //   },
  //   err => {
  //     console.log('Error fetching records')
  //   }
  // )

  // Find by ID
  // db.collection('Todos').find({_id: new ObjectID('5ab53a5c5494dd392429b367')})
  //   .toArray().then(data => {
  //     console.log('Single Record');
  //     console.log(JSON.stringify(data, undefined, 2))
  //   }, err => {
  //     console.log('Error fetching record ', err);
  //   } )


  // count records
  // db.collection('Todos').find().count()
  //   .then(data => {
  //     console.log('Number of Records', data);
  //   }, err => {
  //     console.log('Error finding the count of records.')
  //   })

  // Count by condition
  // db.collection('Todos').find({completed: true}).count()
  //   .then(data => {
  //     console.log('Count : ', data)
  //   }, err => {
  //     console.log('Error getting the count');
  //   })

  // Find by Condition and update

  // Find by id and update

  // Delete by ID

  // Delete by condition
  client.close();
});

