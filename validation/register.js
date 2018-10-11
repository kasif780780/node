const validator = require('validator');
module.exports  = function validateRegisterInput(data){
    let error = {};

    if(!validator.isLength(data.name,{min:2,max:30})){
        error.name = 'Name must be between 2 and 30 character';
    }
 return{
     errors,
     isValid:errors
 }
}