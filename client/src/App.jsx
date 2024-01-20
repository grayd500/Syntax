import React from "react";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import About from "../src/components/About/About.jsx";
// import Contact from "../src/components/Contact/Contact.jsx";
// import Discography from "../src/components/Discography/Discography.jsx";
// import Merch from "../src/components/Merch/Merch.jsx";
// import VIP from "../src/components/VIP/VIP.jsx";
// import Footer from "../src/components/Footer/Footer.jsx";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      {/* <Merch />
      <Discography />
      <Contact />
      <VIP />
      <Footer /> */}
    </main>
  );
  }