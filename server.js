const express = require('express') 
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
const PORT = process.env.PORT;
app.use(express.json());
const mongoose = require('mongoose');
const {getData,createDrink,getDrink,updateDrink,deleteDrink}=require("./controller/drink.controller")
mongoose.connect('mongodb://localhost:27017/drink', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res)=> { 
  res.send('Hello World')
})
 
app.get('/drinks', getData);
app.post('/createDrink', createDrink)
app.get('/getDrink', getDrink)
app.put('/updateDrink/:_id', updateDrink)
app.delete('/deleteDrink/:_id', deleteDrink)

app.listen(8080)