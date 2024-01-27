import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [responses]);

  useEffect(() => {
    const storedResponses = localStorage.getItem('responses');
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };



  const handleSubmit = () => {
    if (feedback.trim() !== '') {
      const truncatedFeedback = feedback.slice(0, 70);
      setResponses((prevResponses) => [...prevResponses, truncatedFeedback]);
      setFeedback('');

    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '1250px', margin: '8rem auto 4rem', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, marginTop: '40px' }}>
        <img
          src="/Band_3.png"
          alt='Animated 80s band image'
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '1100px',
            borderRadius: '10px',
          }}
        />
      </div>

      <div style={{ marginTop: '80px', flex: 1, marginLeft: '80px', textAlign: 'center', maxWidth: '600px', alignSelf: 'center' }}>
        <p style={{ color: '#E53179ff', fontSize: '26px', marginBottom: '20px' }}>
          Check out the latest single <br />"Binary Commencement Bytes" <br />from our album Neon Mountains, Volume 2!
        </p>

        <ReactAudioPlayer
          src="/night-city-knight.mp3"
          autoPlay={isPlaying}
          controls
          style={{ width: '50%', marginTop: '20px', marginLeft: '150px' }}
        />

        <div
          style={{
            marginTop: '70px',
            textAlign: 'center',
            fontSize: '14px',
            color: '#398FD4ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <ul>
            {responses.slice(-5).map((response, index) => (
              <li key={index}>
                {response}
              </li>
            ))}
          </ul>
        </div>
        <h2 style={{ color: '#E53179ff', fontSize: '18px', marginTop: '20px' }}>Let us know what you think!</h2>

        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder='Your feedback and name!'
            style={{
              padding: '8px',
              backgroundColor: 'white',
              marginRight: '10px',
              fontSize: '12px',
              borderRadius: '6px',
              paddingRight: '10px',
              paddingLeft: '25px',
              width: '35%'
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: '8px 16px',
              fontSize: '12px',
              cursor: 'pointer',
              backgroundColor: '#E53179ff',
              color: 'white',
              borderRadius: '6px'
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}