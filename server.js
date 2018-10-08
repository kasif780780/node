const express=require('express');
const mongoose=require('mongoose');



const users=require('./routes/api/user');
const profile=require('./routes/api/profile');
const posts=require('./routes/api/posts');

const app=express();

//db Config
 const db=require('./config/keys').mongoURI;


//Connect to MOngo Db

mongoose
.connect(db)
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));

app.get('/', (req, res)=>res.send('hello world'));

//Use Routes

app.use('/api/users',users)
app.use('/api/profile',profile)
app.use('/api/posts',posts)


const port=process.env.PORTN || 5000;

app.listen(port,()=>console.log('Server running on port '+ port));