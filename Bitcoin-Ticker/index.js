const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log('browser is running on page!');
});

app.get('/',function( req,res) {      // its listening on port 3000 and its geting to the root '/'
   res.sendFile(__dirname+'/index.html');
});

app.post('/', function (req, res) {
  //res.send("boop!");
  console.log(req.body.crypto);
  console.log(req.body.currency);

  var cry = req.body.crypto;
  var cur = req.body.currency;

  request('https://apiv2.bitcoinaverage.com/indices/global/ticker/'+cry+cur+'', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.

  var data = JSON.parse(body);
   console.log(data.last);
   var price = data.last;
res.send("<h1> the current price of bitcoin : " + price + " </h1>");

  });


});
