var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
//const db = mongoose.db('TodoApp');
//save new Something
var Todo = mongoose.model('Todo', {
  text: {
    type:String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner',
  completed: false,
  completedAt: 201905271513
});

newTodo.save().then((doc)=>{
  console.log('Saved todo', doc);
}, (e)=>{
  console.log('Unable to save todo');
});
