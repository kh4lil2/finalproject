import axios from 'axios';
import React, { useState } from 'react'
import './register.css'
import Navbar2 from './navbar2';
export default function Register() {
  const  [user , setuser] = useState("");
 const  [password , setpassword] = useState("");
onsubmit = (e) =>{
  e.preventDefault();
  const dat = {user : user , password : password}
  console.log(user , password);
  axios.post("http://localhost:5000/register",dat ).then(
    res=>{
      console.log(res.data);
    
window.location.href = "http://localhost:3000/"        
    }
  ).catch(err=>console.log(err))

}


  return (
<>
<Navbar2/>
    <div className="wrapper">
    <div className="text-center mt-4 name">
        SIGN UP FOR A FREE ACCOUNT
    </div>
    <form className="p-3 mt-3" onSubmit={onsubmit}>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="Username" onChange={e => setuser(e.target.value)} required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" id="pwd" placeholder="Password" onChange={e => setpassword(e.target.value)} required/>
        </div>
        <button type='submit' className="btn mt-3" >Sign up</button>
    </form>
</div>
</>
  )
}
