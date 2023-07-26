const express = require('express');

const bodyParser = require("body-parser");

const cors = require('cors');

const app = express();

const sequelize = require('./util/database');

app.use(cors());   

app.use(bodyParser.urlencoded({extended : true}));
   
app.use(bodyParser.json());

const lowerRoute = require('./routes/lowerRoute');
const upperRoute = require('./routes/upperRoute')

app.use(lowerRoute);
app.use(upperRoute)
    
sequelize.sync();    

app.listen(5000,()=>{
    console.log('connected to port 5000')
})