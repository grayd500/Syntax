import React from "react";

export default function Navbar() {
  return (
    <header className="bg-indigo-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          SYNTAX
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#discography" className="mr-5 hover:text-white">
            Discograpy
          </a>
          <a href="#merch" className="mr-5 hover:text-white">
            Merch
          </a>
          <a
            href="#contact"
            className="mr-5 hover:text-white flex items-center"
          >
            Contact Us
          </a>
        </nav>
        <a
          href="#tour"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Follow us on Tour!
        </a>
      </div>
    </header>
  );
}