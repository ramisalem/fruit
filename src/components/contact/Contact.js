import React from 'react';
import '../App.css';
import axios from 'axios';

import {  Element   } from 'react-scroll'
import 'font-awesome/css/font-awesome.min.css';

export default class Contact extends React.Component{
    constructor() {
      super();
      this.state = { 
          name:'',
          email:'',
          title:'',
          message:'' ,
          Subject: '' ,
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleSubject = this.handleSubject.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleMassage = this.handleMassage.bind(this);

     }
     

    handleClick(e) {
        let data = {
            subject: this.state.Subject,
            email: this.state.email,
            text: this.state.message
        }

        axios.post('localhost:8001/contact', data)
        .then( res => {
             
            console.log(res.data.message);
            alert("thanks For  Contacing us ")
        })
        .catch( () => {
          console.log('Message not sent');
          alert("massage not sent ");
        })

       
    }
    handleName(event) {
        event.preventDefault();
          this.setState({
            name: event.target.value 
          });
          
    }

    handleEmail(event) {
        event.preventDefault();
          this.setState({
            email: event.target.value 
          });
          
    }
    handleSubject(event) {
        event.preventDefault();
          this.setState({
            title: event.target.value 
          });
          
    }
    handleMassage(event) {
        event.preventDefault();
          this.setState({
            message: event.target.value 
          });
          
    }

   

render () {
    return (
      <Element name="contact" >        
          <div className="contact">
            <div className="container">

                <h1 className="title">Contact us</h1>

                <div className="info">
                   
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <h2>Address</h2>
                    <h5>10th Abuqir - Alex city</h5>

                </div>

                <div className="info">
                    <i className="fa fa-phone"></i>
                    <h2>Phone</h2>
                    <h5>010xxxxxxxxx</h5>
                </div>

                <div className="info">
                    <i className="fa fa-envelope"></i>
                    <h2>Email</h2>
                    <h5>fruit-market@gmail.com</h5>
                </div>

        <form className="conform">
            <input onChange={this.handleName}  placeholder="Name" /> <input  onChange={this.handleEmail} type="email" placeholder="Email" />
            <input  onChange={this.handleSubject} placeholder="Subject" />
            <textarea  onChange={this.handleMassage} placeholder="Message" rows="4" cols="5"></textarea>
            <input  onClick={this.handleClick} type="submit" value="Send message" /> 
        </form>        
            </div>
        </div>
        </Element>


    );
}


}





