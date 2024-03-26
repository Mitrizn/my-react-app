
function Offers() {

  const styles = {
    offerDesc: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      columnGap: '2rem',
      marginBottom: '2.5rem',
      padding: '1rem',
    },
    offers: {
      flex: 1,
      maxWidth: '20rem', // setting a maximum width to maintain consistency
      width: '100%', // occupying full width of its container
      border: '2px solid black',
      borderRadius: '7px',
      boxShadow: '2px 5px 10px 3px rgba(0,0,0,0.4)',
    },
    offerMargin: {
      textAlign: 'center',
      padding: '1rem',
    },
    offerHeader: {
      fontSize: '2rem',
      fontFamily: 'Enriqueta, serif',
      color: '#AF98DA',
    },
    offerDescMessage: {
      fontSize: '1rem',
      fontFamily: 'jockey one, serif',
      marginBottom: '4vw',
    },
  };

  return (
    <div>
      <div style={styles.offerDesc}>
        <div style={styles.offers}>
          <div style={styles.offerMargin}>
            <div style={styles.offerHeader}>
              <h1>Classes</h1>
            </div>

            <div style={styles.offerDescMessage}>
              <p>
                Our Strength & Toning classes are designed to help you build<br></br>  
                strength,increase power, and improve your overall fitness <br></br> level. 
                Each class incorporates Strength Training, Core building, and Recovery.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.offers}>
          <div style={styles.offerMargin}>
            <div style={styles.offerHeader}>
              <h1>Training</h1>
            </div>

            <div style={styles.offerDescMessage}>
              <p>
                We offer Small Group Training and Personal Training sessions based on your goals.<br></br> 
                Meet with a coach to discuss your personal fitness plan and track your progress.
              </p>
            </div>

          </div>
        </div>

        <div style={styles.offers}>
          <div style={styles.offerMargin}>
            <div style={styles.offerHeader}>
              <h1>Virtual</h1>
            </div>

            <div style={styles.offerDescMessage}>
              <p>
                Join us anywhere in the world! You can look and feel your best <br></br> 
                with Killer Body from the comfort of your own home. <br></br> 
                Access our weekly classes from your phone or PC.
              </p>
            </div>

          </div>
        </div>

        <div style={styles.offers}>
          <div style={styles.offerMargin}>
            <div style={styles.offerHeader}>
              <h1>Rentals</h1>
            </div>

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
    </div>
  );
}

export default Offers;
 

