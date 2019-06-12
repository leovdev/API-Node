var express =require('express');
var bodyParser = require('body-parser');


var {mongoose}= require('./db/mongoose');
var {ObjectID}= require('mongodb');
var {Todo}= require('./models/todo');
var {User}= require('./models/user');

var app= express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
     console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((doc)=>{
      res.send(doc);
    }, (e)=>{
          res.status(400).send(e);
    });
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
}, (e)=>{
  res.status(400).send(e);
})

});

app.get('/todos/:id', (req,res)=>{
  var idAPI=req.params.id;

  if (mongoose.Types.ObjectId.isValid(idAPI)){
    Todo.findById(idAPI).then((todo)=>{
      if (!todo){
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((e)=> {  res.status(404).send();})

  }else{
      return res.status(404).send("The id is not valid");
  }


});


app.post('/users', (req,res)=>{

    var user = new User({
      email: req.body.email
    });
 console.log(req.body.email);
    user.save().then((doc)=>{
      res.send(doc);
    }, (e)=>{
          res.status(400).send(e);
    });
});

app.get('/users', (req, res)=>{
  User.find().then((users)=>{
    res.send({users});
}, (e)=>{
  res.status(400).send(e);
})

});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

module.exports = {app};
