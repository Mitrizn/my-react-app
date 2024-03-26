import zenden from '../assets/zenden.jpg';
import freefirst from '../assets/firstclass.png';
import schedule from '../assets/schedule.png';
import React, {useState, useEffect} from 'react';

function SlideShow() {
  const styles = {
    slideshowLayout: {
      maxWidth: "100vw",
      position: "relative",
      margin: "auto",
      marginBottom: "2vw",
    },
    slideshowContainer: {
      maxWidth: "100vw",
      position: "relative",
      margin: "auto",
    },
    mySlides: {
      display: "none",
    },
    prev: {
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      width: "auto",
      marginTop: "-2.2vw",
      padding: "1.6vw",
      color: "black",
      fontWeight: "bold",
      fontSize: "1.8vw",
      transition: "0.6s ease",
      borderRadius: "0 0.3vw 0.3vw 0",
      userSelect: "none",
    },
    next: {
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      right: "0",
      width: "auto",
      marginTop: "-2.2vw",
      padding: "1.6vw",
      color: "black",
      fontWeight: "bold",
      fontSize: "1.8vw",
      transition: "0.6s ease",
      borderRadius: "0.3vw 0 0 0.3vw",
      userSelect: "none",
    },
    prevHover: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    nextHover: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    text: {
      color: "#f2f2f2",
      fontSize: "1.5vw",
      padding: "0.8vw 1.2vw",
      position: "absolute",
      bottom: "0.8vw",
      width: "100%",
      textAlign: "center",
    },
    numbertext: {
      color: "#AF98DA",
      fontSize: "1.4vw",
      padding: "0.8vw 1.2vw",
      position: "absolute",
      fontWeight: "bold",
      top: "0",
    },
    dot: {
      cursor: "pointer",
      height: "1.5vw",
      width: "1.5vw",
      margin: "0 0.2vw",
      backgroundColor: "#bbb",
      borderRadius: "50%",
      display: "inline-block",
      transition: "background-color 0.6s ease",
    },
    activeDot: {
      backgroundColor: "#717171",
    },
    fade: {
      animationName: "fade",
      animationDuration: "1.5s",
    },
  };

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    const timer = setTimeout(() => {
      setSlideIndex((prevSlideIndex) => {
        return prevSlideIndex + 1 >= slides.length ? 0 : prevSlideIndex + 1;
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  return (
    <div>
      <div style={styles.slideshowLayout}>
        <div style={styles.slideshowContainer}>
          <div className="mySlides" style={styles.fade}>
            <div style={styles.numbertext}>1 / 3</div>
            <img src={zenden} style={{ width: "100%" }} />
          </div>

          <div className="mySlides" style={styles.fade}>
            <div style={styles.numbertext}>2 / 3</div>
            <img src={freefirst} style={{ width: "100%" }} />
          </div>

          <div className="mySlides" style={styles.fade}>
            <div style={styles.numbertext}>3 / 3</div>
            <img src={schedule} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
