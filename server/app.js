const path = require('path');

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
var bodyParser = require("body-parser");

const app = express();


app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8001;
app.get('/',(req,res) =>{
  res.send('welcome to backend')
})
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.post('/contact',function(req,res,next){
  
nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "ramireact@gmail.com", // email id
          pass:  "ramisalem2761995"//      })// password
      } ,   tls: {
        rejectUnauthorized: false
    }
  });

  let mailOptions = {
      from:  req.body.email , // sender address
      to: 'ramireact@gmail.com', // list of receivers
      subject:  req.body.subject  ,//req.body.subject, // Subject line 
      text:  req.body.text  , // plain text body
  };

//   // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.send(error)
      }
      res.send('email sent successfully')
  });
});

})
app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
