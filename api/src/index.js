const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoConnectionString = process.env.mongocs;

const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

mongoose.connect(mongoConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const app = express();
const server = http.Server(app);

app.use(cors({ origin: '*' }))
app.use(express.json());

app.get('/', function (request, response) {
    return response.json("VUTTR Api is running");
})

require('./routes')(app)

server.listen(port, function () {
    console.log(`app listening on port ${port}`)
})