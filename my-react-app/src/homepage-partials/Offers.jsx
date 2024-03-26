import React from 'react';

// Define the Offers component
function Offers() {
  // Inline styles for different elements
  const styles = {
    // Styles for the container of all offers
    offerDesc: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '2rem',
      marginBottom: '4rem',
      padding: '1rem',
    },
    // Styles for margins within offer boxes
    offerMargin: {
      flex: 1,
      border: '2px solid black',
      borderRadius: '7px',
      boxShadow: '2px 5px 10px 3px rgba(0,0,0,0.4)',
      textAlign: 'center',
      padding: '1rem',
    },
    // Styles for offer headers
    offerHeader: {
      fontSize: '2rem', // Adjusted from '4vw'
      fontFamily: 'Enriqueta, serif',
      color: '#AF98DA',
    },
    // Styles for offer descriptions
    offerDescMessage: {
      fontSize: '1rem', // Adjusted from '1vw'
      fontFamily: 'jockey one, serif',
      marginBottom: '2rem',
    },
  };

  // Render the component
  return (
    <div>
      {/* Container for all offers */}
      <div style={styles.offerDesc}>
        {/* Individual offer */}
        <div style={styles.offerMargin}>
          <div style={styles.offerHeader}>
            <h1>Classes</h1>
          </div>
          {/* Description of the Classes offer */}
          <div style={styles.offerDescMessage}>
            <p>
              Our Strength & Toning classes are designed to help you build<br></br>  
              strength,increase power, and improve your overall fitness <br></br> level. 
              Each class incorporates Strength Training, Core building, and Recovery.
            </p>
          </div>
        </div>

        {/* Repeat the structure for other offers */}
        <div style={styles.offerMargin}>
          <div style={styles.offerHeader}>
            <h1>Training</h1>
          </div>
          {/* Description of the Training offer */}
          <div style={styles.offerDescMessage}>
            <p>
              We offer Small Group Training and Personal Training sessions based on your goals.<br></br> 
              Meet with a coach to discuss your personal fitness plan and track your progress.
            </p>
          </div>
        </div>

        <div style={styles.offerMargin}>
          <div style={styles.offerHeader}>
            <h1>Virtual</h1>
          </div>
          {/* Description of the Virtual offer */}
          <div style={styles.offerDescMessage}>
            <p>
              Join us anywhere in the world! You can look and feel your best <br></br> 
              with Killer Body from the comfort of your own home. <br></br> 
              Access our weekly classes from your phone or PC.
            </p>
          </div>
        </div>

        <div style={styles.offerMargin}>
          <div style={styles.offerHeader}>
            <h1>Rentals</h1>
          </div>
          {/* Description of the Rentals offer */}
          <div style={styles.offerDescMessage}>
            <p>
              Use our studio to help build your business and take <br></br> 
              your content to the next level. Rentals available for classes, <br></br> 
              meetings, photography, parties, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the component
export default Offers;
