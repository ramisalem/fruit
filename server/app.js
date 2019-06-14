// const path = require('path');

// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// const port = 8001;

// app.get('/api/products', (req, res) => {
//   res.sendFile(path.join(__dirname, 'data', 'products.json'));
// });

// app.listen(port, () => {
//   console.log(`[products] API listening on port ${port}.`);
// });

const path = require('path');

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
var bodyParser = require("body-parser");

const app = express();
// app.use(cors());
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
  // res.json(req)
  console.log(req.body)
nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "ramibnkseel@gmail.com", // email id
          pass:  "Ramisalem_2761995"//      })// password
      }
  });

  let mailOptions = {
      from: 'rami@dhad.me', // sender address
      to: 'ramibnkseel@gmail.com', // list of receivers
      subject:  "hello" ,//req.body.subject, // Subject line 
      text: 'lplplp', // plain text body
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
