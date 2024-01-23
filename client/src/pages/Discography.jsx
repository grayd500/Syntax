import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Discography() {
  const containerStyle = {
    width: "65%",
    margin: "0 auto", // Center the container
  };

  const albums = [
    // Your array of album data goes here
    // Example:
    {
      title: "Album 1",
      image: "../../assets/images/Album_SelfTitled.png",
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3"], // Add actual track names
    },
    // Add more album objects as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const albumCoverStyle = {
    position: "relative",
    minHeight: "100vh", // Ensure each slide takes up the whole viewport height
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    opacity: 0, // Initially hidden
    transition: "opacity 0.3s ease", // Smooth transition on hover
  };

  const coverImageStyle = {
    width: "100%",
    height: "auto",
    cursor: "pointer",
    margin: "0 auto", // Center the image
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
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <div id="discography" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
        <h2 className="text-3xl mb-4 font-semibold">Album Discography</h2>
        <Slider {...sliderSettings}>
          {albums.map((album) => (
            <div key={album.title} style={albumCoverStyle}>
              <div style={overlayStyle}>
                <h3 className="text-xl mb-2">{album.title}</h3>
                <p>{album.releaseDate}</p>
                <ul style={trackListStyle}>
                  {album.trackList.map((track, index) => (
                    <li key={index}>{track}</li>
                  ))}
                </ul>
              </div>
              <img
                src={album.image}
                alt={album.title}
                style={coverImageStyle}
                onMouseEnter={(e) => (e.currentTarget.nextSibling.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.nextSibling.style.opacity = 0)}
              />
              <button className="slick-prev" style={{ ...sliderButtonStyle, left: 0 }} />
              <button className="slick-next" style={{ ...sliderButtonStyle, right: 0 }} />
            </div>
          ))}
        </Slider>
      </div>
      {/* Your footer can go here if needed */}
    </div>
  );
}
