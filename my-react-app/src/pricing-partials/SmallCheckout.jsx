import React from 'react';
import KbNav from '../partials/KbNav';
import KbFooter from '../partials/KbFooter';
import logo from '../assets/main-logo.png';

function SmallCheckout() {
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

  const cost= 350.00;
  const itemName= 'Small Group Membership';

  return (
    <div>
      <KbNav />
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Checkout</h1>
        </div>

        <div style={styles.orderItem}>
          <div style={styles.itemDetails}>
            <img style={styles.itemImage} src={logo} />
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
          <button style={styles.placeOrderButton}>Place your order</button>
        </div>
      </div>
      <KbFooter />
    </div>
  );
}

export default SmallCheckout;
