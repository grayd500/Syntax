// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Discography() {
//   const containerStyle = {
//     width: "65%",
//     position: "relative",
//   };

//   const CustomNextArrow = ({ onClick }) => (
//     <img
//       src={nextButtonImage}
//       alt="Next"
//       className="slick-arrow custom-arrow custom-next-arrow"
//       onClick={onClick}
//       style={{
//         position: "absolute",
//         top: "35%",
//         right: "-50px", // Adjust this value to add spacing on the right
//         transform: "translateY(-50%)",
//         zIndex: "1",
//       }}
//     />
//   );

//   const CustomPrevArrow = ({ onClick }) => (
//     <img
//       src={prevButtonImage}
//       alt="Prev"
//       className="slick-arrow custom-arrow custom-prev-arrow"
//       onClick={onClick}
//       style={{
//         position: "absolute",
//         top: "35%",
//         left: "-50px", // Adjust this value to add spacing on the left
//         transform: "translateY(-50%)",
//         zIndex: "1",
//       }}
//     />
//   );

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   return (
//     <section id="projects" className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
//         <Slider {...sliderSettings}>
//           {/* {projects.map((project) => (
//             <div key={project.image} className="relative">
//               <a href={project.link} className="sm:w-1/2 w-100 p-4 h-full">
//                 <div className="flex relative h-full">
//                   <img
//                     alt="gallery"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                     src={project.image}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover", 
//                       border: "3px solid #312e81",
//                     }}
//                   />
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 flex flex-col justify-between h-full">
//                     <div>
//                       <h2
//                         className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 flex flex-wrap"
//                         dangerouslySetInnerHTML={{ __html: project.subtitle }}
//                         style={{
//                           gap: "0.5rem",
//                           flexBasis: "100%",
//                           display: "flex",
//                           justifyContent: "space-between",
//                           padding: "0.25rem",
//                         }}
//                       ></h2>
//                       <h1 className="title-font text-lg font-medium text-white mb-3">
//                         {project.title}
//                       </h1>
//                     </div>
//                     <p className="leading-relaxed">
//                       {project.description} <br /><br />
//                       {project.repoLink && (
//                         <a
//                           href={project.repoLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white bg-green-500 py-1 px-2 rounded-md"
//                         >
//                           GitHub Repository
//                         </a>

//                       )}
//                     </p>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))} */}
//         </Slider>
//       </div>
//       <p style={{ textAlign: "center", fontSize: "16px", width: "60%", margin: "-50px auto 20px", border: "1px solid #6366f1", padding: "10px", borderRadius: "5px" }}>
//         Discography
//       </p>
//     </section>
//   );
// }