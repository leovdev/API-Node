var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
//const db = mongoose.db('TodoApp');
//save new Something
// var Todo = mongoose.model('Todo', {
//   text: {
//     type:String,
//     required:true,
//     minlength:1,
//     trim:true
//   },
//   completed: {
//     type: Boolean,
//     default:false
//   },
//   completedAt: {
//     type: Number,
//     default:  null
//   }
// });

// var newTodo = new Todo({
//   text: 'Cook dinner',
//   completed: false,
//   completedAt: 201905271513
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e)=>{
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo ({
//  text: ' true '
// });
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// }, (e)=>{
//   console.log('unable to save', e);
// });

var User = mongoose.model('Users',{
  email: {
    type: String,
    minlength:1,
    trim: true,
    required:true
  },
  password:{
    type: String
  }
});

var user = new User({
  email:'  Elena  '
});
user.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined,2));
}, (e)=>{
  console.log(e);
});
