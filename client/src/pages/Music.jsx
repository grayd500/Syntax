import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlbumImage from "/Album_SelfTitled.png";

export default function Music() {
  const containerStyle = {
    width: "50%",
    minHeight: "75vh",
    position: "relative",
    marginTop: "125px", // Add margin to the top to space out from the navbar
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
  };

  const coverImageStyle = {
    width: "100%",
    height: "auto",
    cursor: "pointer",
  };

  const trackListStyle = {
    listStyle: "none",
    padding: 0,
    textAlign: "center",
    marginTop: "10px",
  };

  const sliderButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  };

  const albums = [
    {
      title: "Album 1",
      image: AlbumImage,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3"],
    },
  ];

  return (
    <div id="music" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
        <Slider dots={false} infinite speed={500} slidesToShow={1} slidesToScroll={1}>
          {albums.map((album) => (
            <div key={album.title} style={{ ...albumCoverStyle, minHeight: "100vh" }}>
              <div
                style={{
                  ...overlayStyle,
                  opacity: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.5)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
              >
                <h3 className="text-xl mb-2">{album.title}</h3>
                <p>{album.releaseDate}</p>
                <ul style={trackListStyle}>
                  {album.trackList.map((track, index) => (
                    <li key={index}>{track}</li>
                  ))}
                </ul>
              </div>
              <img src={album.image} alt={album.title} style={coverImageStyle} />
              <button className="slick-prev" style={{ ...sliderButtonStyle, left: 0 }} />
              <button className="slick-next" style={{ ...sliderButtonStyle, right: 0 }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}