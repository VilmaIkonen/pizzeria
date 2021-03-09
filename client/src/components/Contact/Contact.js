import React from 'react';
import {Button} from '@material-ui/core';
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div>
      Contact pizzeria Mamma Mia:
      <ContactForm /> 
      <Button href='/'>Back Home</Button>   
    </div>
  );
};

export default Contact;