//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

var obj=new ObjectID();
console.log(obj);

//se crea el cliente de mongo, se conecta al servidor
//mongo y se crea la bd
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result)=>{
  //   console.log(result);
  // });
  // findOneAndDelete
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});
  //client.close();
});
