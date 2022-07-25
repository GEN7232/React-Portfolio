import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const styles={
  formStyle: {
    backgroundColor: 'white',
    maxWidth: '500px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '25px',
    borderRadius: '5px'
  }
}

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5d4cvsa', 'template_2o5v1wz', form.current, 'Txo8nMBF9Z5sccG2Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form style={styles.formStyle} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs