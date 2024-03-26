
function PriceIntro() {

  const styles= {
    priceIntro: {
      borderBottom: '1px black solid',
      backgroundColor: 'black',
      marginTop: '5rem'
    },
    priceIntroHeading: {
      color: '#C726ED',
      fontSize: '7rem',
      fontFamily: 'enriqueta, serif',
    },
    priceIntroDescription: {
      fontFamily: 'enriqueta, serif',
      textAlign: 'center',
    },
    priceIntroParagraph: {
      color: 'black',
      fontSize: '1.5rem',
      lineHeight: '1.5',
      fontFamily: 'enriqueta, serif',
      fontWeight: 'bold',
    }
  };

    return (
      <div>
        <div className="price-intro" style={styles.priceIntro}>
          <h1 className="price-intro-heading" style={styles.priceIntroHeading}>Welcome to our community!</h1>
        </div>

        <div className="price-intro-description" style={styles.priceIntroDescription}>
          <p className="price-intro-paragraph" style={styles.priceIntroParagraph}>
            If you are joining us for the first time, we are excited to have you.<br></br> 
            We understand that starting a new journey can be a bit intimidating.<br></br>  
            That is why we are offering you a chance to join us for a free class. <br></br> 
            It is a great way to get to know our community, meet our friendly instructors, <br></br> 
            and see if our classes are the right fit for you. There is no pressure, <br></br> 
            no strings attached. Just a warm, welcoming space where you can explore<br></br> 
            and learn at your own pace. <br></br> <br></br> 

            SO WHY WAIT? <br></br> 
            Sign up now and join us for a free class.<br></br> 
            We are looking forward to meeting you!
          </p>
        </div>
      </div>
    );
  }

  export default PriceIntro;