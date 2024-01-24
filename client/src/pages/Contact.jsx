import React from "react";
import backgroundImage from "../assets/images/SoundBoard.png";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        alert("Message sent!");
        // Reset the form using the form element's reset method
        e.target.reset();
      })
      .catch((error) => alert(error));
  }

  // Band members data
  const bandMembers = [
    {
      name: "Christi Tugwell",
      instrument: "Keyboard",
      github: "https://github.com/tugwellchristi",
      linkedin: "https://www.linkedin.com/in/christi-tugwell-a67194104/",
    },
    {
      name: "Brianary Starr (David Gray)",
      instrument: "Synthesizers",
      github: "https://github.com/grayd500",
      linkedin: "https://www.linkedin.com/in/grayd500/",
    },
    {
      name: "Cimarron Jenschke",
      instrument: "Guitar",
      github: "https://github.com/cjenschke",
      linkedin: "https://www.linkedin.com/in/cimarron-jenschke-a59ab5290/",
    },
    {
      name: "Derek Modugno",
      instrument: "Bass",
      github: "https://github.com/derekm129",
      linkedin: "",
    },
    {
      name: "BeatMagnet (Dale Haynie)",
      instrument: "Percussion",
      github: "https://github.com/Daleray1231",
      linkedin: "https://www.linkedin.com/in/dale-haynie-3b66142a7/",
    },
    // Add more members as needed
  ];


  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto p-10 flex sm:flex-nowrap flex-wrap">
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "100% 105%", // Adjusted property
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center", // Center the background image
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "13px",
            borderRadius: "10px",
            marginRight: "20px", // Add margin to create space between the form and the map
          }}
        >
          <h2 className="text-white sm:text-2xl text-1xl mb-1 font-medium title-font text-center">
            Book Here
          </h2>
          <p className="leading-relaxed mb-5">
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
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
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
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
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-center flex-col justify-center relative" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(229, 49, 121, 0.5)', borderRadius: '10px' }}>
          <h2 className="text-white text-4xl mb-4 font-medium" style={{ textShadow: '0 0 5px rgba(229, 49, 121, 1)' }}>
            The Band
          </h2>
          <br />
          <ul className="text-white text-left text-center"> {/* Added text-center class */}
            {bandMembers.map((member, index) => (
              <li key={index} className="mb-4"> {/* Added margin-bottom for spacing */}
                <strong className="text-indigo-500">{member.name}</strong>
                <ul>
                  <li><span style={{ color: 'rgb(229, 49, 121)' }}>{member.instrument}</span></li>
                  <li><a href={member.github} target="_blank" rel="noopener noreferrer" style={{ textShadow: '0 0 5px rgba(0, 0, 255, 1)' }}>GitHub</a></li>
                  <li><a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textShadow: '0 0 5px rgba(0, 0, 255, 1)' }}>LinkedIn</a></li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}