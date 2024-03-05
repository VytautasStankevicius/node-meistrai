const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const userRoutes = require('./routes/userRoutes')
const autoshopRoutes = require('./routes/autoshopRoutes')
const workerRoutes = require('./routes/workerRoutes')
const morgan = require('morgan')


app.use(morgan('dev'));
//Mounting router
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/autoshops',autoshopRoutes);
app.use('/api/v1/workers',workerRoutes);


module.exports = app;
 