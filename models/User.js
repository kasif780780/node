const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create SChema 

const UserSchema=new Schema({
 name:{
     type:String,
     required:false
 },
 
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
avatar:{
    type:String

},
date:{
    type:Date,
    default:Date.now
},
});

module.exports = User = mongoose.model('users',UserSchema);