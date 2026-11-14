import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={cardStyle}>
      <div style={headerStripeStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>Timer</h2>
        <div style={timeDisplay}>{seconds}s</div>
        <div style={buttonContainer}>
          <button style={startBtn} onClick={handleStart}>Start</button>
          <button style={pauseBtn} onClick={handlePause}>Pause</button>
          <button style={resetBtn} onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '2px solid #6f4e37',
  borderRadius: '12px',
  width: '300px',
  backgroundColor: '#fffdf7',
  fontFamily: 'sans-serif',
  overflow: 'hidden',
};

const headerStripeStyle = {
  height: '14px',
  backgroundColor: '#ffa7d4',
  borderBottom: '4px solid #6f4e37',
};

const contentStyle = {
  padding: '24px 20px',
  textAlign: 'center',
};

const titleStyle = {
  margin: '0 0 15px 0',
  color: '#4a2c2a',
  fontSize: '22px',
  fontWeight: '700',
};

const timeDisplay = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#5c4033',
  marginBottom: '20px',
  backgroundColor: '#e6d5c3',
  borderRadius: '8px',
  padding: '10px 0',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const startBtn = {
  backgroundColor: '#a3e635',
  border: '1px solid #6f4e37',
  borderRadius: '6px',
  padding: '8px 14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '#3f6212',
};

const pauseBtn = {
  backgroundColor: '#fde047',
  border: '1px solid #6f4e37',
  borderRadius: '6px',
  padding: '8px 14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '#854d0e',
};

const resetBtn = {
  backgroundColor: '#f472b6',
  border: '1px solid #6f4e37',
  borderRadius: '6px',
  padding: '8px 14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '#831843',
};

export default Timer;