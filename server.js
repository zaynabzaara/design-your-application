

const express = require("express");
const mongoose= require('mongoose');
const connectDB = require('./config/connectDB');
const cors = require('cors');


require('dotenv').config();
const app = express();

connectDB(); //invoking the connection



app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cors());









//calling the routes 
app.use('/register', require('./Routes/Register'));
app.use("/posts", require('./Routes/Posts'));
 app.use('/login', require('./Routes/Login'));
 


//Starting the server
const port = process.env.PORT || 5000;
app.listen(port , err => {err?console.log(err):console.log(`The Server is Running on Port : http://localhost:${port}`)})