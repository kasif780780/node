const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser'); 
const passport = require('passport');



const users=require('./routes/api/user');
const profile=require('./routes/api/profile');
const posts=require('./routes/api/posts');



const app=express();

// body parser middlewarw
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



//db Config
 const db=require('./config/keys').mongoURI;


//Connect to MOngo Db

mongoose
.connect(db,{ useNewUrlParser: true })
 .then(()=>console.log('MongoDB Connected'))
// .catch(err=>console.log(err));

//Passport Midleware
app.use(passport.initialize());
app.use(passport.session());

//Passport Config
require('./config/passport')(passport);

//Use Routes

app.use('/api/users',users)
app.use('/api/profile',profile)
app.use('/api/posts',posts)


const port=process.env.PORTN || 5000;

app.listen(port,()=>console.log('Server running on port '+ port));