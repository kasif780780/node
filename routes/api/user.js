const express = require('express');
const router  = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');



// LOAD USER model

 const User = require('../../models/User');

// @route Get Api User/test
// @desc  Test USER route
// @access Public
router.get('/test',(req,res)=>res.json({msg:"User WOrks "}));


// @route Get Api User/Register
// @desc  Register USER route
// @access Public



   
router.post('/register',(req, res) =>{ console.log(req)
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            return res.status(400).json({email: 'email already Exist'});
        }
        else{
            const avatar = gravatar.url(req.body.email,{
                s:'200', //Size
                r:'pg' ,//rating
                d: 'mm' //default
            })
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                avatar:avatar,
                password:req.body.password
            });
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err=>console.log(err));
                });
            });
        }
    });
});
module.exports=router;