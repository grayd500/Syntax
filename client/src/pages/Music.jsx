import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlbumImage from "/Album_SelfTitled.png";
import AlbumImage2 from "/Album_NeonMountains.png";
import AlbumImage3 from "/Album_SystemError.png";
import "../music.css"
export default function Music() {
  const albums = [
    {
      title: "Syntax",
      image: AlbumImage,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
    },
    {
      title: "Neon Mountains",
      image: AlbumImage2,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
    },
    {
      title: "System Error",
      image: AlbumImage3,
      releaseDate: "Release Date: MM/DD/YYYY",
      trackList: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="music" className="text-white body-font" style={{ marginTop: "100px"}}>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <Slider {...settings} className="square-carousel">
          {albums.map((album, index) => (
            <div key={index} className="square-slide">
              <img src={album.image} alt={album.title} className="square-image" />
              <div className="overlay">
                <div className="album-details">
                  <h3>{album.title}</h3>
                  <p>{album.releaseDate}</p>
                  <ul>
                    {album.trackList.map((track, i) => (
                      <li key={i}>{track}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}