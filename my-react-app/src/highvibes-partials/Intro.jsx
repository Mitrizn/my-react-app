function Intro() {

    const styles = {
      highvibesPageLayout: {
        display: 'block',
        textAlign: 'center',
        backgroundColor: 'black',

      },
      highvibeIntroContainer: {
        marginTop: '90px',
      },
      highStart: {
        fontSize: '20px',
        fontFamily: 'jockey one',
        color: 'white',
      },
      title: {
        letterSpacing: '0.4em',
        color: '#C726ED',
        fontSize: '90px',
        fontWeight: '800',
        fontFamily: 'carme',
      },
      highPara: {
        color: 'white',
        fontSize: '18px',
        fontFamily: 'enriqueta',
      },
    };

    return (
      <div style={styles.highvibesPageLayout}>
          <div style={styles.highvibeIntroContainer}>
            <div style={styles.highStart}>It's a Vibe!</div>
            <h1 style={styles.title}>HIGH VIBEZ</h1>
            <p style={styles.highPara}>
              High Vibez is your Judgement Free safe space to enjoy fitness, gatherings and events with other successful individuals who loves to DABble in the Bud.
            </p>
          </div>
      </div>
    );
}
export default Intro;
