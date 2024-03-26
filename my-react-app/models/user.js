
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const userSchema= new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },

  pass:{
    type: Number,
    default: 0
  },
  
  role:{
    type: String,
    default: 'user'
  }
}, {timestamps: true});

const User= mongoose.model('User', userSchema);
module.exports=User;