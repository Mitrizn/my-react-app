
import vibing from "../assets/highvibez-ppl.jpg";
import flames from "../assets/highsmoke.jpg";
function Display() {
  
  const styles = {
  peopleVisionContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    borderTop: '1px white solid',
    borderBottom: '1px white solid',
    backgroundColor: 'black',
  },
  highvibesImgLayout: {
    flex: 1,
    border: '0.1rem white solid',
  },
  highVibesImage: {
    height: '100%',
    width: '100%',
  },
  bookClassContainer: {
    flex: 1,
  },
  vision: {
    color: '#C726ED',
    fontSize: '2rem',
    fontFamily: 'enriqueta, serif',
  },
  visionMsg: {
    color: 'white',
    fontSize: '1.3rem',
    fontFamily: 'enriqueta, serif',
    lineHeight: '1.5rem',
  },
  classButton: {
    color: 'black',
    backgroundColor: '#C726ED',
    fontSize: '1rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '0.5rem 0.8rem',
    border: 'none',
    fontWeight: 'bold',
  },
  };

  return (
  <div>
    <div style={styles.peopleVisionContainer}>
    <div style={styles.highvibesImgLayout}>
      <img src={vibing} alt="High Vibes Session" style={styles.highVibesImage} />
    </div>

    <div style={styles.bookClassContainer}>
      <div style={styles.vision}>VISION</div>
      <div>
      <p style={styles.visionMsg}>
        We've created this Canni-Community because finding your <br></br>
        people can be life changing! Having an environment <br></br>
        where we can reach our goals and vibe at the same <br></br>
        time is what High Vibez is all about. <br></br>
        Look forward to curated events that will take <br></br>
        you to HIGHer levels through fellowship and networking. <br></br>
        You've been waiting for this, so come and enjoy the vibez!
      </p>
      </div>
      <div>
      <button style={styles.classButton}>TAKE A CLASS</button>
      </div>
    </div>
    </div>

    <div style={styles.peopleVisionContainer}>
    <div style={styles.bookClassContainer}>
      <div style={styles.vision}>POTicy</div>
      <div>
      <p style={styles.visionMsg}>
        All of our events are Bring your own Bud.<br></br>
        We do not sell or distribute.<br></br>
        Must be 21+ and have proof of ID.<br></br>
        Classes are Women Only unless Specified<br></br>
        (We do host unisex events)<br></br>
        Tickets are Non-Refundable<br></br>
      </p>
      </div>
      <div>
      <button style={styles.classButton}>TAKE A CLASS</button>
      </div>
    </div>
    <div style={styles.highvibesImgLayout}>
      <img src={flames} alt="Smoke Flames" style={styles.highVibesImage} />
    </div>
    </div>
  </div>
  );
}
export default Display;