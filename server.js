const http = require('http');

const express = require('express');
app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4700;


app.listen(port);

console.log('server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/routWord/", require('./routes/routWord'));

