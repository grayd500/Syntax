import React, { useState } from "react"; import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlbumImage from "/Album_SelfTitled.png";
import AlbumImage2 from "/Album_NeonMountains.png";
import AlbumImage3 from "/Album_SystemError.png";


export default function Music() {
  const containerStyle = {
    width: "65%",
    minHeight: "80vh",
    position: "relative",
    marginTop: "125px",
  };

  const albumCoverStyle = {
    position: "relative",
    minHeight: "100vh",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    opacity: 0,
    transition: "opacity 0.3s ease",
    cursor: "pointer",
  };


  const coverImageStyle = {
    width: "90%",
    height: "90%",
    cursor: "pointer",
    margin: "auto",
    display: "block",
  };

  const trackListStyle = {
    listStyle: "none",
    padding: 0,
    textAlign: "center",
    marginTop: "10px",
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleMouseEnter = (outerIndex) => {
    setAlbums((prevAlbums) => {
      return prevAlbums.map((album, innerIndex) => {
        if (innerIndex === outerIndex) {
          return { ...album, isHovered: true };
        } else {
          return { ...album, isHovered: false };
        }
      });
    });
  };

  const handleMouseLeave = () => {
    setAlbums((prevAlbums) => {
      return prevAlbums.map((album) => ({ ...album, isHovered: false }));
    });
  };

  const [albums, setAlbums] = useState([
    {
      title: "Syntax",
      image: AlbumImage,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
      isHovered: false,
    },
    {
      title: "Neon Mountains",
      image: AlbumImage2,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
      isHovered: false,
    },
    {
      title: "System Error",
      image: AlbumImage3,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
      isHovered: false,
    },

  ]);

  return (
    <div id="music" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
        <Slider dots={false} infinite speed={500} slidesToShow={1} slidesToScroll={1}>
          {albums.map((album, outerIndex) => (
            <div key={album.title} style={{ ...albumCoverStyle, minHeight: "100vh" }}>
              <div
                style={{
                  ...overlayStyle,
                  opacity: album.isHovered ? 0.5 : 0,
                }}
                onMouseEnter={() => handleMouseEnter(outerIndex)}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-xl mb-2">{album.title}</h3>
                <p>{album.releaseDate}</p>
                <ul style={trackListStyle}>
                  {album.trackList.map((track, innerIndex) => (
                    <li key={innerIndex}>{track}</li>
                  ))}
                </ul>
              </div>
              <img
                src={album.image}
                alt={album.title}
                style={coverImageStyle}
                onMouseEnter={() => handleMouseEnter(outerIndex)}
                onMouseLeave={handleMouseLeave}
              />
              <button className="slick-prev" />
              <button className="slick-next" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


