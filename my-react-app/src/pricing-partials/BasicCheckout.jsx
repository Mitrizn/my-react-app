import React, { useState } from 'react';
import KbNav from '../partials/KbNav';
import KbFooter from '../partials/KbFooter';
import logo from '../assets/main-logo.png';

function BasicCheckout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:5175/members', {
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

  const styles = {
    container: {
      backgroundColor: '#F4F4F4',
      padding: '2rem',
    },
    header: {
      backgroundColor: '#AF98DA',
      color: 'white',
      padding: '1rem',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    orderItem: {
      backgroundColor: 'white',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '5px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    itemDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    itemImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginRight: '1rem',
    },
    itemName: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    itemPrice: {
      fontWeight: 'bold',
    },
    deliveryOptions: {
      marginBottom: '1rem',
    },
    deliveryOption: {
      marginBottom: '0.5rem',
    },
    summary: {
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '5px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    },
    totalRow: {
      fontWeight: 'bold',
    },
    placeOrderButton: {
      backgroundColor: '#AF98DA',
      color: 'white',
      border: 'none',
      padding: '0.8rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  const cost = 169.00;
  const itemName = 'Basic Membership';

  return (
    <div>
      <KbNav />
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Checkout</h1>
        </div>

        <div style={styles.orderItem}>
          <div style={styles.itemDetails}>
            <img style={styles.itemImage} src={logo} alt="Logo" />
            <div>
              <div style={styles.itemName}>{itemName}</div>
              <div style={styles.itemPrice}>${cost}</div>
            </div>
          </div>
        </div>

        <div style={styles.summary}>
          <div>Order Summary</div>
          <div style={styles.summaryRow}>
            <div>Items (1):</div>
            <div>${cost}</div>
          </div>
          <div style={styles.summaryRow}>
            <div>Total:</div>
            <div style={styles.totalRow}>${cost}</div>
          </div>
        </div>

        <div style={styles.deliveryOptions}>
          <h2>Enter Your Information</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.deliveryOption}>
              <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </label>
            </div>
            <div style={styles.deliveryOption}>
              <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
            </div>
            <div style={styles.deliveryOption}>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
            </div>
            <div style={styles.deliveryOption}>
              <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </label>
            </div>
            <button style={styles.placeOrderButton}>Place your order</button>
          </form>
        </div>
      </div>
      <KbFooter />
    </div>
  );
}

export default BasicCheckout;
