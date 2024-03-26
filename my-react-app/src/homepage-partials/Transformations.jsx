import transformation1 from '../assets/bodypic1.jpg';
import transformation2 from '../assets/bodypic2.jpg';
import transformation3 from '../assets/bodypic3.jpg';
import transformation4 from '../assets/bodypic4.jpg';

function Transformations() {
  
  const styles = {
    transformationsLayout: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgb(243, 243, 243)',
      columnGap: '0.5rem',
      padding: '1rem',
    },
    
    transformationContainer: {
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '0.5vw',
      padding: '0.5vw',
      marginTop: '3vw',
    },
    
    transformationsLayoutMedia: {
      gridTemplateColumns: '1fr 1fr',
      rowGap: '2rem',
    },
    
    transformImages: {
      width: '100%',
      objectFit: 'cover',
      objectPosition: '50% 50%',
    },
  };

  return (
    <div>
      <div style={styles.transformationsLayout}>

        <div style={styles.transformationContainer}>
          <img src={transformation1} style={styles.transformImages} />
        </div>

        <div style={styles.transformationContainer}>
          <img src={transformation2} style={styles.transformImages} />
        </div>

        <div style={styles.transformationContainer}>
          <img src={transformation3} style={styles.transformImages} />
        </div>

        <div style={styles.transformationContainer}>
          <img src={transformation4} style={styles.transformImages} />
        </div>

      </div>
    </div>
  );
}

export default Transformations;