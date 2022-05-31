const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const tankRoute = require('./routes/book');

const app = express();

const url ="mongodb://127.0.0.1:27017/tank";
app.use(bodyParser.json());


app.use(cors())

app.use('/tank', tankRoute)

mongoose.connect(url,)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
 app.listen(3001,()=>{
     console.log("app running ")
 })

