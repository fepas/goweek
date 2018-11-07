const express = require('express');
const mongoose = require('mongoose');
const cors =  require("cors");

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);    

mongoose.connect(
    "mongodb://fepas:felipe141518@ds239911.mlab.com:39911/fepas-gw-backend",
    {
        useNewUrlParser : true
    }
);

app.use(cors());
app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('reloaded on port 3000');
});