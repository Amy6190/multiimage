const express = require('express');
const app = express();

const cors = require('cors');

const mongoose = require('./config/db');
const userRoutes = require('./routes/userroutes')

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("node is running")
})

app.use('/api/properties',userRoutes)
app.listen(5000,()=>{console.log('server connected');
});