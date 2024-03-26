import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import book from '../assets/bookclass.jpg';

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [message, setMessage] = useState('');
  
  const classSchedule = {
    'Monday': ['Upperbody - 6:15am', 'Upperbody - 6:15pm', 'Barre - 7:15pm'],
    'Tuesday': ['Abs/Core - 6:15pm'],
    'Wednesday': ['Legs & Glutes - 6:15am', 'Legs & Glutes - 7:15pm', 'Kickboxing - 6:15pm'],
    'Thursday': ['HIIT Cardio - 6:15pm'],
    'Saturday': ['Full body - 9:00am'],
    'Sunday': ['Full body - 9:00am']
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowEmailInput(false); // Reset email input when date changes
  };

  const handleBookClick = (className) => {
    setSelectedClass(className);
    setShowEmailInput(true);
  };

  const handleEmailSubmit = () => {
    if (email && selectedClass) {
      fetch('/bookClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, className: selectedClass }),
      })
      .then(response => response.text())
      .then(message => {
        setMessage(message);
        setShowEmailInput(false);
        setEmail('');
        setSelectedClass(null);
      })
      .catch(err => console.error(err));
    } else {
      setMessage('Please enter your email');
    }
  };

  const dayOfWeek = selectedDate ? format(selectedDate, 'eeee') : null;
  const scheduleHTML = (classSchedule[dayOfWeek] || []).map((className) => (
    <div key={className}>
      <p>
        {className} 
        <button onClick={() => handleBookClick(className)}>Book</button>
      </p>
      {selectedClass === className && showEmailInput && (
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <button onClick={handleEmailSubmit}>Submit</button>
        </div>
      )}
    </div>
  ));

  const styles = {
    classesLayout: {
      margin: '130px 10px 20px 10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      border: '4px solid #AF98DA',
      boxShadow: '2px 5px 10px 3px rgba(0,0,0,0.4)',
    },
    bookingImageLayout: {
      flex: 1,
      textAlign: 'end',
    },
    bookingImage: {
      width: '100%',
      height: '100%',
    },
    scheduleBookingLayout: {
      display: 'block',
      flex: 1,
      textAlign: 'center',
    },
    classSchedule: {
      textAlign: 'left',
      marginTop: '2rem',
      paddingLeft: '1.5rem',
    },
    message: {
      color: 'red',
      marginTop: '1rem',
    },
  };

  return (
    <div>
      <div style={styles.classesLayout}>
        <div style={styles.bookingImageLayout}>
          <img src={book} style={styles.bookingImage} alt="Booking" />
        </div>
        <div style={styles.scheduleBookingLayout}>
          <div className="booking-calendar">
            <h1>Book a Class</h1>
            <div className="calendar-layout">
              Date: <DatePicker selected={selectedDate} onChange={handleDateChange} />
            </div>
            <div style={styles.classSchedule}>
              {scheduleHTML}
            </div>
            {message && <div style={styles.message}>{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
