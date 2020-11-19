const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World! </h1>')
});

app.get('/about', (req, res) => {
  res.send('<h1>muskan here bitch! </h1><br> i like to code  XD')
});
app.listen(3000, function(){
  console.log("listening to ur crap!")

});
