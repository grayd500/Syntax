import React, { useEffect, useRef } from "react";

export default function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current.focus();
  }, []);

  return (
    <div>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem libero ex impedit delectus animi rerum hic magni, enim minus reprehenderit itaque dicta sit fugit aperiam veniam ipsum quisquam nostrum..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem libero ex impedit delectus animi rerum hic magni, enim minus reprehenderit itaque dicta sit fugit aperiam veniam ipsum quisquam nostrum..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem libero ex impedit delectus animi rerum hic magni, enim minus reprehenderit itaque dicta sit fugit aperiam veniam ipsum quisquam nostrum..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem libero ex impedit delectus animi rerum hic magni, enim minus reprehenderit itaque dicta sit fugit aperiam veniam ipsum quisquam nostrum..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem libero ex impedit delectus animi rerum hic magni, enim minus reprehenderit itaque dicta sit fugit aperiam veniam ipsum quisquam nostrum..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem libero ex impedit delectus animi rerum hic magni, enim minus reprehenderit itaque dicta sit fugit aperiam veniam ipsum quisquam nostrum..</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img 
          src="/Band_1.png"
          alt="80s Retro band photo"
          className="object-cover object-center rounded w-full max-h-96"
          />
        </div>
      </div>
    </section>
    </div>
  );
}