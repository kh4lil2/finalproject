var nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express')
const app = express()
require('./config/connectDB');
var cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
const User = require('./models/Usermodal')
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
  app.post("/register", async (req, res)=>{
    var username = req.body.user
    var password = req.body.password
  console.log(username , password)
  username = new User({
    username: req.body.user,
    password: req.body.password
});
await username.save();
res.send(username);

});
app.post("/Login" , async (req,res)=>{
   try {
        const dt = req.body
        const existUser = await User.findOne(dt)
        console.log(dt);
        console.log(existUser);
        console.log(req.body)
        if(existUser && existUser.password == dt.password){
          res.send("yourreloged");
        }else{
          res.send("User or password not found try again")
        }
       
    } catch (error) {
        console.log(error)
    }
})
app.listen("5000" , ()=>{console.log("server is on 5000")})