var mongoose=require('mongoose');

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

// var user = new User({
//   email:'  Elena  '
// });
// user.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined,2));
// }, (e)=>{
//   console.log(e);
// });

module.exports = {User};
