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
              Introducing SYNTAX, sonic pioneers of synth rock!
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed" style={{ textIndent: '1em' }}>
              Syntax combines the energy of rock 'n' roll with the electronic soundscapes of synthwave. Embark on a sonic odyssey through the fabric of time and space as they skillfully weave cutting-edge sonic production and iconic songwriting into their musical tapestry.
              When Syntax takes the stage, be prepared for a sensory explosion - from dazzling lazer lights to mind-bending holographic visuals and explosive pyrotechnics.
              Let the music of Syntax take you on a journey that you will never forget!
            </p>
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