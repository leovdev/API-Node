const MongoClient= require('mongodb').MongoClient;
//se crea el cliente de mongo, se conecta al servidor
//mongo y se crea la bd
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp'); //Database reference

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert to do',err);
    }

   console.log(JSON.stringify(result.ops, undefined,2));
  });

//Exercise
// The  mongo identifier have: Time stamp, machine identifier, processID,value increment.
 db.collection('Users').insertOne({
   name: 'Leo',
   age: '22',
   location:'Bogotá'
 }, (err, result)=>{
   if (err){
     return console.log('Impossible to insert the new Doc',err)
   }
   console.log(JSON.stringify(result.ops, undefined,2));
 });
  client.close();
});
