 const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

var app  = express();

app.listen(3000,function () {
  console.log('yup listening on port 3000');
});
