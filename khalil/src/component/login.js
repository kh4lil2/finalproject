import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import Navbar2 from './navbar2';

export default function Login  () {
    const  [username ,setusername] = useState("");
    const  [password , setpassword] = useState("");
    const [message,setmessage]=useState("");
    onsubmit = (e) =>{
        e.preventDefault();
        const dat = {username : username , password : password}
        console.log(username , password);
        axios.post("http://localhost:5000/Login",dat).then(
          res=>{
            console.log(res.data);
           if(res.data === "yourreloged"){
            setmessage('you are loged')
            window.location.href = "http://localhost:3000/Home"
           }
           else{
            setmessage("ERROR!! NAME OR PASSWORD INVALID")
           }

          

            

          }

          
        ).catch(err=>console.log(err));
       
        if(message == "your re loged"){
          window.location.href = "http://localhost:3000/Home"}
        
         
        }
        
          
    

  return (
    <>
    <Navbar2/>

    <div className="wrapper">
    <div className="text-center mt-4 name">
        LOGIN
    </div>
    <form className="p-3 mt-3" onSubmit={onsubmit}>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="Username" onChange={e => setusername(e.target.value)}required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" id="pwd" placeholder="Password" onChange={e => setpassword(e.target.value)}required/>
        </div>
        <button type='submit' className="btn mt-3"  >Login</button>
    </form>
    <h6 style={{backgroundColor : "#FF8080"}}>{message}</h6>
</div>
</>
  )
}


