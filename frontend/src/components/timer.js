import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let timer;
    if (!paused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [paused, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      setTimeLeft(duration);
    }
  }, [timeLeft, onComplete]);

  const handlePause = () => {
    setPaused(true);
  };

  const handleResume = () => {
    setPaused(false);
  };

  const progressBarWidth = ((duration - timeLeft) / duration) * 100 + '%';

  return (
    <div>
      <div style={{ width: '200px', border: '1px solid black', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: progressBarWidth, height: '20px', backgroundColor: 'green' }}></div>
      </div>
      <div>
        Time Left: {timeLeft} seconds
      </div>
      <button onClick={paused ? handleResume : handlePause}>
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default Timer;