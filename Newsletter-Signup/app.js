 const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const mailchimp = require('@mailchimp/mailchimp_transactional');
const client = require('@mailchimp/mailchimp_transactional');


var app  = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));



app.get('/',function(req, res){
  res.sendFile(__dirname+'/signup.html');

});



app.post('/' , function(req, res){
   console.log('boop!');
   var fName = req.body.fName;
   var lName = req.body.lName;
   var email = req.body.email;


   var data ={
      members :  [
        {
          email_address : email,
          status : 'subscribed',
          merge_fields : {
            FNAME: fName,
            LNAME: lName
          }
        }
      ]
   };
   var jsonData = JSON.stringify(data);

   options = {
   url :'https://us7.api.mailchimp.com/3.0/lists/a50b9e8a4c',
   method : 'POST',
   headers : {
     "Authorization" : "muskansawa 090c57da81572181687d2a34c7867952-us7"
   },
   body : jsonData
   };

   request(options , function(error, response , body) {
   if(error){
     res.sendFile(__dirname+'/failure.html');
   }
   else{
     if(response.statusCode==200){
      res.sendFile(__dirname+'/success.html');
    }
      else{
         res.sendFile(__dirname+'/failure.html');
      }
   }
   });


});

app.post('/failure',function (req, res) {
  res.redirect('/');
} );

app.listen(process.env.PORT || 3000,function () {
  console.log('yup listening on port 3000');
});







//API Key : 090c57da81572181687d2a34c7867952-us7
//list id :a50b9e8a4c
