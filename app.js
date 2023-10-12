const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/TestServer",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Succeded");
}).catch((err)=>{
    console.log(err);
});

app.use('/static',express.static('static'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('signIn.pug');
});

app.listen(port,()=>{
    console.log(`Application Started At Port ${port} on LocalHost`);
});