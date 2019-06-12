const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id= '5d0129ed2c2de55ea45532de11';

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo)=>{
  if (!todo){
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e)=> console.log(e));



User.find({email:"Elena"}).then((user)=>{
  if (!user){
    return console.log('Email not found');
  }
  console.log('user by email', user);
}).catch((e)=> console.log(e));

uId="5d0135b3de60e667905dba92";

User.findById(uId).then((user)=>{
  if (!user){
    return console.log('Email not found by Id');
  }
  console.log('user by Id', JSON.stringify(user,undefined,2));
}).catch((e)=> console.log(e));
