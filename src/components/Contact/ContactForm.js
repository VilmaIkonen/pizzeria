import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const ContactForm= () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onChangeName = (event) => {
    setName({name: event.target.value});
  }
  const onChangeEmail = (event) => {
    setEmail({email: event.target.value});
  }
  const onChangeMessage = (event) => {
    setMessage({message: event.target.value});
  }  

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(process.env.URL, event)
    .then(response => {
      if(response.data.status === 'success') {
        alert('Message send');
        resetForm();
      }
      else if(response.data.status === 'fail'){
        alert('Failed to send message')
      }
    })
    .catch(err => console.log(err))    
  }

  const resetForm = () => {
    setName({name: ''});
    setEmail({email: ''});
    setMessage({message: ''});
  }
  
  return (  
    <form id='contactForm' onSubmit={handleSubmit} method='POST'>
      <TextField label='Name' type='text' value={name} onChange={onChangeName}/>
      <TextField label='Email' type='text' value={email} onChange={onChangeEmail}/>
      <TextField label='Message' type='text' value={message} onChange={onChangeMessage}/>
      <Button type='submit' label='send'>Send message</Button>         
    </form>
  );
};

export default ContactForm;