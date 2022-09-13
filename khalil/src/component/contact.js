import React, { Component } from 'react'
import Img from '../img.jpg';
import Map from './map'
import { Form, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import axios from "axios";
import Navbar1 from './navbar';

export default class contact extends Component {
 constructor(){
  super();
  this.state={
    nom : "",
    object:"",
    message:"",
    email:""
  }
  

 }
sendEmail =(e)=> {
e.preventDefault();
axios.post("https://oussamacc.herokuapp.com/contact" ,this.state).then(
res=>{
  console.log(res)
  
  swal("thank for your require", "we will reply as soon as possible", "success").then(function(){
    window.location.reload(); 
 });
  
}
).catch(err=>
{console.log(err)})


}
  render(){
    
  return (
    
    <>

<Navbar1/>
      <div className='sl' >
        <img className='contactimg' src={Img} />
      </div>
      <div className="columns">
        <div class="column column-2 cc" >
        <form onSubmit={this.sendEmail} >
          <Card className='card' style={{ width: "100%" }} >
            <Card.Body className='contact'>
              <Card.Title>Contact Us</Card.Title>

            </Card.Body>
            <Form.Label className='a'>Votre Nom(Obligatoire)</Form.Label>
            <Form.Control type='text' name='name' placeholder="ecrire votre nom" onChange={e=>this.setState({nom : e.target.value})} />
           
              <div className='a'>Object(Obligatoire)</div>
              <select className='optionn' name='object' onChange={e=>this.setState({object : e.target.value})}  >
                <option value='coaching'>coaching</option>
                <option value='information'>information</option>
                <option value='rendez-vous'>rendez-vous</option>
              </select>
            
            <Form.Label className='a'>Votre Email(Obligatiore)</Form.Label>
            <Form.Control type="email" name='email' placeholder="name@example.com" onChange={e=>this.setState({email : e.target.value})} />
            <Form.Label className='a'>Votre Message(Obligatoire)</Form.Label>
            <Form.Control name='message' type="textarea" rows={4} placeholder="message" onChange={e=>this.setState({message : e.target.value})} />
            <div>
              <Button variant="success" className='button' type='submit'   >Send</Button>
            </div>
          </Card>
        </form>
        </div>
        <div className="column column-1">
          <Map />
        </div>
      </div>
    </>



  )}
}


