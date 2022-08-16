var nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.post('/contact', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        }
      });
      
      var mailOptions = {
        from: 'khalilrafrafi2001@gmail.com',
        to: 'khalilrafrafi2001@gmail.com',
        subject: "help request from : " + req.body.nom,
        text:"message: " + req.body.message + "\n" + "object: " + req.body.object + "\n" + "Email: " + req.body.email 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send();
    
  })

app.listen(process.env.PORT, () => {
    console.log("designed listening on port ${process.env.PORT}")
  })