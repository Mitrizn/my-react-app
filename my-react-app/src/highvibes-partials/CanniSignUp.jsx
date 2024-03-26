import React, { useState } from 'react';
function CanniSignUp() {

  const styles = {
    highvibesSignupMargin: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: '2.5rem',
      height: '21rem',
      backgroundColor: 'black',
      margin: 0,
      padding: 0,
    },

    signupMsgLayout: {
      flex: 1,
    },

    canniTitle: {
      fontFamily: 'georgia',
      color: '#C726ED',
      fontSize: '1.6rem',
      fontWeight: 400,
    },

    canniMsg: {
      color: 'white',
      fontFamily: 'questrial',
      fontSize: '1.4rem',
    },

    signupInputLayout: {
      flex: 1,
      marginLeft: '-9.4rem',
    },

    canniInputLayout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '2.5',
      position: 'relative',
    },

    canniInputLayout1: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '3rem',
    },

    label1: {
      position: 'absolute',
      top: '-2.5rem',
      left: '6.25rem',
      fontFamily: 'georgia',
      fontSize: '0.875rem',
      fontWeight: 400,
      fontStyle: 'italic',
    },

    label2: {
      position: 'absolute',
      top: '-2.5rem',
      left: '23.75rem',
      fontFamily: 'georgia',
      fontSize: '0.875rem',
      fontWeight: 400,
      fontStyle: 'italic',
    },

    label3: {
      position: 'absolute',
      top: '-2.5rem',
      left: '6.25rem',
      fontFamily: 'georgia',
      fontSize: '0.875rem',
      fontWeight: 400,
      fontStyle: 'italic',
    },

    label4: {
      position: 'absolute',
      top: '-2.5rem',
      left: '23.75rem',
      fontFamily: 'georgia',
      fontSize: '0.875rem',
      fontWeight: 400,
      fontStyle: 'italic',
    },

    canniInput: {
      width: '220px',
      padding: '10px 1px 10px 20px',
      color: 'black',
      fontSize: '15px',
      fontFamily: 'enriqueta',
    },

    inputTwo: {
      marginLeft: '-140px',
    },

    placeholder: {
      color: 'black',
    },

    canniSignUp: {
      backgroundColor: '#C726ED',
      color: 'black',
      padding: '8px 20px',
      border: 'none',
      fontSize: '14px',
      fontFamily: 'Heebo',
      fontWeight: 'bold',
      borderRadius: '5px',
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
  
    fetch('http://localhost:5175/vibes', {
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

    <div>
      <div style={styles.highvibesSignupMargin}>
        <div style={styles.signupMsgLayout}>
          <div style={styles.canniTitle}>CANNI FRIENDLY CLASSES</div>
          <div>
            <p style={styles.canniMsg}>Stay updated with future canni-classes and events!</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.signupInputLayout}>
          <div style={styles.canniInputLayout1}>
            <div>
              <input type="text" id="firstName" name="firstName"  placeholder="e.g., Jane" onChange={handleChange} style={styles.canniInput} />
              <div>
                <p style={styles.label1}>First Name</p>
              </div>
            </div>
            <div style={styles.inputTwo}>
              <input type="text" id="lastName" name="lastName" placeholder="e.g., Smith" onChange={handleChange} style={styles.canniInput} />
              <div>
                <p style={styles.label2}>Last Name</p>
              </div>
            </div>
          </div>

          <div style={styles.canniInputLayout}>
            <div>
              <input type="text" id="email" name="email"  placeholder="e.g., email@example.com" onChange={handleChange} style={styles.canniInput} />
              <div>
                <p style={styles.label3}>Email</p>
              </div>
            </div>
            <div style={styles.inputTwo}>
              <input type="number" id="phone" name="phone" placeholder="e.g., 555-555-5555" onChange={handleChange} style={styles.canniInput} />
              <div>
                <p style={styles.label4}>Phone</p>
              </div>
            </div>
          </div>

          <div>
            <button type="submit"  style={styles.canniSignUp}>SIGN UP!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CanniSignUp; 