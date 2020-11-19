const express = require('express');
const app = express();

app.get('/', function(req ,res){
res.send("hello beautiful!")
});

app.listen(3000, function () {
  console.log("server set at 3ooo");
});
