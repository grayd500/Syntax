import React, { useEffect, useRef } from "react";

export default function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current.focus();
  }, []);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            ref={headingRef}
            tabIndex="-1"
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white focus:outline-none"
            style={{ outline: "none" }}
          >
            Hi, we're SYNTAX.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed" style={{ textIndent: '1em' }}>
            About the band.</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        </div>
      </div>
    </section>
  );
}