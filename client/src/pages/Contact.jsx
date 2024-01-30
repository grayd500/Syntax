import React from 'react';
import backgroundImage from '../assets/SoundBoard.png';

export default function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    // Use the Formspree endpoint URL with your actual Form ID
    const formSpreeEndpoint = 'https://formspree.io/f/xqkrevbl';
  
    fetch(formSpreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        alert('Message sent!');
        // Reset the form using the form element's reset method
        e.target.reset();
      })
      .catch((error) => alert('Error submitting the form. Please try again later.'));
  }

  // Band members data
  const bandMembers = [
    {
      name: 'Synth Siren (Christi Tugwell)',
      instrument: 'Keyboard, Vocals',
      github: 'https://github.com/tugwellchristi',
      linkedin: 'https://www.linkedin.com/in/christi-tugwell-a67194104/',
    },
    {
      name: 'Brianary Starr (David Gray)',
      instrument: 'Synthesizers',
      github: 'https://github.com/grayd500',
      linkedin: 'https://www.linkedin.com/in/grayd500/',
    },
    {
      name: 'BeatMagnet (Dale Haynie)',
      instrument: 'Percussion',
      github: 'https://github.com/Daleray1231',
      linkedin: 'https://www.linkedin.com/in/dale-haynie-3b66142a7/',
    },
    {
      name: 'Cimarron Jenschke',
      instrument: 'Syntax General Manager',
      github: 'https://github.com/cjenschke',
      linkedin: 'https://www.linkedin.com/in/cimarron-jenschke-a59ab5290/',
    },
    {
      name: 'Derek Modugno',
      instrument: 'Press and Booking Manager',
      github: 'https://github.com/derekm129',
      linkedin: '',
    },
    // Add more members as needed
  ];

  return (
    <section
      id="contact"
      className="relative"
      style={{
        marginTop: '8rem',
        marginBottom: '6rem',
      }}
    >
      <div className="container px-5 py-6 mx-auto p-10 flex flex-col md:flex-row items-center justify-center text-center lg:ml-24 md:ml-4 ">
        {/* Band Info Box */}
        <div
          id="band-links"
          className="lg:w-3/4 md:w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-4 sm:ml-4 p-5 flex items-center justify-center flex-col relative order-1 md:order-2"
          style={{
            border: '2px solid white',
            borderRadius: '10px',
            boxShadow: '0px 0px 20px 10px #E53179ff'
          }}
        >
          <h2
            className="text-white text-4xl mb-4 font-medium"
            style={{
              textShadow: '0 0 5px rgba(229, 49, 121, 1)',
            }}
          >
            The Band
          </h2>
          <br />
          <ul className="text-white text-left flex flex-wrap justify-center">
            {bandMembers.slice(0, 3).map((member, index) => (
              <li
                key={index}
                className={`mb-3 mx-3 ${index < 2 ? 'mr-3' : ''}`}
              >
                <strong className="text-indigo-500">{member.name}</strong>
                <ul>
                  <li>
                    <span style={{ color: 'rgb(229, 49, 121)' }}>
                      {member.instrument}
                    </span>
                  </li>
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textShadow: '0 0 5px rgba(0, 0, 255, 1)',
                      }}
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textShadow: '0 0 5px rgba(0, 0, 255, 1)',
                      }}
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <h2
            className="text-white text-4xl mb-4 font-medium"
            style={{
              textShadow: '0 0 5px rgba(229, 49, 121, 1)',
              marginTop: '30px',
            }}
          >
            Band Management
          </h2>
          <ul
            className="text-white text-left flex flex-wrap justify-center"
            style={{ marginTop: '30px' }}
          >
            {bandMembers.slice(3).map((member, index) => (
              <li key={index} className="mb-3 mx-3">
                <strong className="text-indigo-500">{member.name}</strong>
                <ul>
                  <li>
                    <span style={{ color: 'rgb(229, 49, 121)' }}>
                      {member.instrument}
                    </span>
                  </li>
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textShadow: '0 0 5px rgba(0, 0, 255, 1)',
                      }}
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textShadow: '0 0 5px rgba(0, 0, 255, 1)',
                      }}
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="order-2 md:order-1 h-auto md:w-2/3 sm:w-5/6 mx-auto flex flex-col lg:w-2/3 md:py-8 mt-8 md:mt-0 text-left lg:mr-28 lg:ml-8"
          style={{
            border: '1px solid indigo',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '100% 105%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        >
          <h2
            className="text-white sm:text-2xl text-1xl mb-1 font-medium title-font text-center"
            style={{ textShadow: '0 0 5px rgba(0, 0, 255, 1)' }}
          >
            Book Here
          </h2>
          <p className="leading-relaxed mb-5"></p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="relative mb-4"
            style={{
              textShadow: '0 0 5px rgba(0, 0, 255, 1)',
            }}
          >
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              style={{ textShadow: '2px 2px 5px rgba(169, 169, 169, 0.8)' }}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
