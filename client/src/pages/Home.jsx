import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);


  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '1250px', margin: '8rem auto 5rem', display: 'flex' }}>
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

      <div style={{ flex: 1, marginLeft: '80px', textAlign: 'center', maxWidth: '600px', alignSelf: 'center' }}>
        <p style={{ color: '#E53179ff', fontSize: '26px', marginBottom: '20px' }}>
          Check out the latest single <br />"Binary Commencement Bytes" <br />from our album Neon Mountains, Volume 2!
        </p>

        <ReactAudioPlayer
          src="/night-city-knight.mp3"
          autoPlay={isPlaying}
          controls
          style={{ width: '50%', marginTop: '20px', marginLeft: '150px' }}
        />
      </div>
    </div>
  );
}