import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Discography() {
  const containerStyle = {
    width: "65%",
    position: "relative",
  };

  const CustomNextArrow = ({ onClick }) => (
    <img
      src={nextButtonImage}
      alt="Next"
      className="slick-arrow custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "35%",
        right: "-50px", // Adjust this value to add spacing on the right
        transform: "translateY(-50%)",
        zIndex: "1",
      }}
    />
  );

  const CustomPrevArrow = ({ onClick }) => (
    <img
      src={prevButtonImage}
      alt="Prev"
      className="slick-arrow custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "35%",
        left: "-50px", // Adjust this value to add spacing on the left
        transform: "translateY(-50%)",
        zIndex: "1",
      }}
    />
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
      </div>
      <p style={{ textAlign: "center", fontSize: "16px", width: "60%", margin: "-50px auto 20px", border: "1px solid #6366f1", padding: "10px", borderRadius: "5px" }}>
        Discography
      </p>
    </section>
  );
}