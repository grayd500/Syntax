import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div
      className="text-center my-8 md:flex md:flex-wrap"
      style={{
        marginTop: '120px',
        marginBottom: '55px',
      }}
    >
      <div className="order-1 md:flex-1 mt-7 md:w-2/3 mx-auto lg:ml-14 lg:mb-10">
        <img
          src="/Band_3.png"
          alt="Animated 80s band image"
          className="w-full h-auto md:w-2/3 sm:w-5/6 rounded-md border-2 border-white lg:ml-56 md:mx-auto sm:mx-auto"
          style={{ boxShadow: '0px 0px 20px 10px #E53179ff' }}
        />
      </div>

      <div
        id="album-info"
        className="order-2 md:flex-1 mt-8 md:ml-8 md:max-w-600px lg:mr-14 self-center md:w-full"
      >
        <p
          style={{
            color: '#E53179ff',
            fontSize: '26px',
            marginBottom: '20px',
          }}
        >
          Check out the latest single <br />
          "Binary Commencement Bytes" <br />
          from our album Neon Mountains, Volume 2!
        </p>

        <ReactAudioPlayer
          src="/night-city-knight.mp3"
          autoPlay={isPlaying}
          controls
          className="w-full md:w-2/3 sm:w-1/2 mt-8"
          style={{
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </div>
    </div>
  );
}
