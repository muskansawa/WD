const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log('browser is running on page!');
});

app.get('/',function( req,res) {      // its listening on port 3000 and its geting to the root '/'
   res.sendFile(__dirname+'/index.html');
});
