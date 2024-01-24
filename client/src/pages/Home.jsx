import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: '800px', margin: 'auto' }}>
        <img
          src="/Band_3.png"
          alt='Animated 80s band image'
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '600px',
            display: 'block',
            margin: 'auto',
            marginTop: '150px',
            borderRadius: '10px',
          }}
        />
        <div style={{ paddingLeft: '20px', flex: '1' }}>
          <p style={{ color: '#E53179ff', fontSize: '18px' }}>
            Check out our latest single "Binary Commencement Bytes" in #E53179ff.
          </p>
        </div>
      </div>
      <ReactAudioPlayer
        src="/night-city-knight.mp3"
        autoPlay={isPlaying}
        controls
        style={{ width: '15%', marginTop: '20px' }}
      />
    </div>
  );
}
