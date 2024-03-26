import bicycle from '../assets/free-session-image.jpg';
import React, { useState } from 'react';

function Contact() {
  

  const styles = {
    freeSignUpLayout: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    
    freeSessionImageLayout: {
      flex: 1,
      padding: '1.2rem',
    },

    signUpMargin: {
      flex: 1,
      padding: '1.2rem',
    },

    registerTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1.2rem',
    },
    
    formLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      verticalAlign: 'top',
    },

    kbImageFree: {
      width: '45vw',
      objectFit: 'cover',
    },
    
    firstnameInput: {
      padding: '0.65rem',
      borderRadius: '0.25rem',
      border: '1px solid black',
    },
    
    lastnameInput: {
      padding: '0.65rem',
      borderRadius: '0.25rem',
      border: '1px solid black',
    },
    
    emailInput: {
      padding: '0.65rem',
      borderRadius: '0.25rem',
      border: '1px solid black',

    },
    
    phoneInput: {
      padding: '0.65rem',
      borderRadius: '0.25rem',
      border: '1px solid black',
    },
    
    signupButton: {
      padding: '0.65rem 1.5rem',
      borderRadius: '0.25rem',
      border: 'none',
      backgroundColor: '#AF98DA',
      fontFamily: 'Enriqueta',
      fontWeight: 'bold',
      letterSpacing: '0.1rem',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }); 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:5175/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  
  
  return (
    <div className="freeSignUpLayout" style={styles.freeSignUpLayout}>
      <div className="freeSessionImageLayout" style={styles.freeSessionImageLayout}>
        <img src={bicycle} className="kbImageFree" style={styles.kbImageFree}></img>
      </div>

      <div className="signUpMargin" style={styles.signUpMargin}>
        <div className="register-title" style={styles.registerTitle}>
          <h1>Grab your FREE Session at the Gym for Women!</h1>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.formLayout}>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" style={styles.firstnameInput} onChange={handleChange} required />
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" style={styles.lastnameInput} onChange={handleChange} required />
          <input type="text" id="email" name="email" placeholder="Email" style={styles.emailInput} onChange={handleChange} required />
          <input type="number" id="phone" name="phone" placeholder="Phone" style={styles.phoneInput} onChange={handleChange} required />
          <button type="submit" style={styles.signupButton}>REGISTER!</button>
        </form>

      </div>
    </div> 
  );
}

export default Contact;  