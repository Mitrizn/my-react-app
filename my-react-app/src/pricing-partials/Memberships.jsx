import { Link } from 'react-router-dom';
function Memberships() {
  
  const styles = {
    offerDesc: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      columnGap: '2rem',
      marginBottom: '2.5rem',
      padding: '1rem',
    },
    offerDescMedia: {
      '@media (max-width: 50rem)': {
        flexWrap: 'wrap',
        rowGap: '2rem',
      },
    },
    offers: {
      flex: 1,
      width: '20rem',
      border: '2px solid black',
      borderRadius: '7px',
      boxShadow: '2px 5px 10px 3px rgba(0,0,0,0.4)',
    },
    offerMargin: {
      textAlign: 'center',
      padding: '1rem',
    },

    offerTitle: {
      fontSize: '4rem',
      fontFamily: 'Enriqueta, serif',
      color: '#AF98DA',
      textAlign: 'center',
      marginTop: '5rem',
    },

    offerHeader: {
      fontSize: '1rem',
      fontFamily: 'Enriqueta, serif',
      color: '#AF98DA',
    },
    offerDescMessage: {
      fontSize: '1rem',
      fontFamily: 'jockey one, serif',
      fontWeight: 'bold',
      marginBottom: '4vw',
      lineHeight: '1.5',
    },
    offerButtonLayout: {
      backgroundColor: '#AF98DA',
      color: 'white',
      padding: '0.8vw 2.5vw',
      border: 'none',
      fontFamily: 'Heebo, sans-serif',
      fontWeight: 'bold',
    },
  };
    return (
      <div>
        <div className="price-intro">
          <h1 style={styles.offerTitle}>PRICING</h1>
        </div>

        <div className="offer-desc" style={styles.offerDesc}>
          <div className="offers" style={styles.offers}>
            <div className="offer-margin" style={styles.offerMargin}>
              <div className="offer-header" style={styles.offerHeader}>
                <h1>Basic</h1>
              </div>

              <div className="offer-desc-message" style={styles.offerDescMessage}>
                <p>
                  For just $169 a month, our<br />
                   Basic Membership offers unlimited access to <br />
                   on-demand classes, virtual workshops, and masterclasses. Enjoy the flexibility of <br />
                  attending classes at your convenience and dive <br />
                  into a diverse range of fitness experiences tailored to your preferences.
                </p>
              </div>

              <div className="offer-button-layout">
                <Link to="/basiccheckout">
                  <button className="offer-button" style={styles.offerButtonLayout}>JOIN NOW</button>
                </Link>
                
              </div>
            </div>
          </div>

          <div className="offers" style={styles.offers}>
            <div className="offer-margin" style={styles.offerMargin}>
              <div className="offer-header" style={styles.offerHeader}>
                <h1>Personal</h1>
              </div>

              <div className="offer-desc-message" style={styles.offerDescMessage}>
                <p>
                Elevate your fitness journey with our <br /> 
                Small Group Membership, available at $350 a month. Enjoy 30-minute small group <br />
                training sessions every week, designed <br />
                to provide personalized attention and support in a motivating group setting. 
                </p>
              </div>

              <div className="offer-button-layout">
                <Link to="/personalcheckout">
                  <button className="offer-button" style={styles.offerButtonLayout}>JOIN NOW</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="offers" style={styles.offers}>
            <div className="offer-margin" style={styles.offerMargin}>
              <div className="offer-header" style={styles.offerHeader}>
                <h1>Small Group</h1>
              </div>

              <div className="offer-desc-message" style={styles.offerDescMessage}>
                <p>
                Step up your fitness game with our<br /> 
                Personal Training Membership<br />
                 at $500 a month. Beyond the offerings of the<br /> 
                 Basic Membership, this exclusive package<br /> 
                 provides you with two one-hour personal <br />
                 training sessions per week. Experience <br />
                 personalized guidance and tailored <br />
                 workouts designed to optimize your fitness journey.
                </p>
              </div>

              <div className="offer-button-layout">
                <Link to="/smallcheckout">
                  <button className="offer-button" style={styles.offerButtonLayout}>JOIN NOW</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Memberships;