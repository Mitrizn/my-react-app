
import workoutRopes from '../assets/michi-ropes.jpg';
import kbLogo from '../assets/kb-logo.jpg';

function EmmyAwards() {

  const styles = {
  
  layout: {
    padding:'1rem',
  },
  homePicMargin: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    zIndex: 0,
    width: '100%',
    height: '50vw',
    backgroundColor: '#AF98DA',
    margin: 'auto',
    marginTop: '8rem',
  },
  michiPic: {
    height: '50vw',
  },
  emmySection: {
    position: 'absolute',
    top: '7vw',
    left: '0px',
    display: 'block',
    textAlign: 'center',
    width: '50vw',
    height: '43vw',
    backgroundColor: 'white',
  },
  kbLogoPic: {
    width: '28vw',
  },
  kbLogoLayout: {
    marginBottom: '-2vw',
  },
  emmyMention: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 800,
    fontSize: '2.7vw',
    letterSpacing: '0.5vw',
  },
  emmyMentionMargin: {
    marginBottom: '-2vw',
  },
  introEmmySec: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    lineHeight: '1.8em',
    letterSpacing: '0em',
  },
  introEmmyMargin: {
    marginBottom: '-0.4vw',
  },
  bookClass: {
    backgroundColor: '#AF98DA',
    color: 'white',
    padding: '1vw',
    border: 'none',
    fontSize: '1.4vw',
    fontFamily: 'Heebo, sans-serif',
    fontWeight: 700,
    cursor: 'pointer',
  },
  };

  return (
    <div style={styles.layout}>
      <div style={styles.homePicMargin}>
        <div style={styles.michiPicMargin}>
          <img src={workoutRopes} style={styles.michiPic}></img>
        </div>

        <div style={styles.emmySection}>
          <div style={styles.kbLogoLayout}>
            <div>
              <img src={kbLogo} style={styles.kbLogoPic}></img>
            </div>
          </div>

          <div style={styles.emmyMentionMargin}>
            <p style={styles.emmyMention}>EMMY AWARD WINNING<br/>
            GYM FOR WOMEN</p>
          </div>

          <div style={styles.introEmmyMargin}>
            <p style={styles.introEmmySec}>Whether it's your first time working out or <br />
            you're a Gym Pro, we've got everything <br />
            covered to help you reach your health & <br />
            fitness goals.</p>
          </div>

          <div style={styles.emmySectionButtons}>
            <div>
              <button style={styles.bookClass}>BOOK CLASS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmmyAwards;
