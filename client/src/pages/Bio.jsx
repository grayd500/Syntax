import React, { useEffect, useRef } from 'react';

export default function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current.focus();
  }, []);

  return (
    <div>
      <section id="about" className="lg:mt-32 lg:mb-32 md:mt-16">
        <div className="container mx-auto px-10 py-20 flex flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mt-10 sm:mt-10 order-1 md:order-2 flex flex-col md:items-start">
            <h1
              ref={headingRef}
              tabIndex="0"
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
              style={{
                color: '#E53179ff',
                outline: '0',
              }}
            >
              Introducing SYNTAX, sonic pioneers of synth rock!
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Syntax combines the energy of rock 'n' roll with the electronic
              soundscapes of synthwave. Embark on a sonic odyssey through the
              fabric of time and space as they skillfully weave cutting-edge
              sonic production and iconic songwriting into their musical
              tapestry. When Syntax takes the stage, be prepared for a sensory
              explosion - from dazzling lazer lights to mind-bending holographic
              visuals and explosive pyrotechnics. Let the music of Syntax take
              you on a journey that you will never forget!
            </p>
          </div>
          <div className="order-2 ">
            <img
              src="/Band_1.png"
              alt="80s Retro band photo"
              className="rounded"
              style={{
                width: '600',
                height: '300',
                border: '2px solid white',
                boxShadow: '0px 0px 30px 5px blue',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
