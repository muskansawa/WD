const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extented:true}));

app.get('/', function(req ,res){
res.sendFile(__dirname+"/index.html");
//console.log(__dirname+"/index.html");
});

app.post('/',function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;

  res.send('thanks something to display on screen bro! = '+ result);
console.log(req.body);
});

app.listen(3000,function(){
  console.log('listening to u!')
});
