import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="/Band_3.png"
        alt='Animated 80s band image'
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '600px',
          display: 'block',
          margin: 'auto',
        }}
      />

      <ReactAudioPlayer
        src="/night-city-knight.mp3"
        autoPlay={isPlaying}
        controls
        style={{ width: '15%', marginTop: '20px' }}
      />

    </div>
  );
}
