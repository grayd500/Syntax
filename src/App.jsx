import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Discography from "./components/Discography";
import Merch from "./components/Merch";
import VIP from "./components/VIP";
import Footer from "./components/Footer.js";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Merch />
      <Discography />
      <Contact />
      <VIP />
      <Footer />
    </main>
  );
  }