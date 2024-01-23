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
      name: "Member1",
      instrument: "Guitar",
      github: "github.com/member1",
      linkedin: "linkedin.com/in/member1",
    },
    {
      name: "Member2",
      instrument: "Bass",
      github: "github.com/member2",
      linkedin: "linkedin.com/in/member2",
    },
    // Add more members as needed
  ];


    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
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
                        padding: "10px",
                        borderRadius: "10px",
                        marginRight: "20px", // Add margin to create space between the form and the map
                      }}
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Let's Rock together!
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
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center flex-col justify-center relative">
          <h2 className="text-white text-2xl mb-4 font-medium">The Band</h2>
          <ul className="text-white text-left">
            {bandMembers.map((member, index) => (
              <li key={index}>
                <strong>{member.name}</strong>
                <ul>
                  <li>Instrument: {member.instrument}</li>
                  <li>Github: {member.github}</li>
                  <li>LinkedIn: {member.linkedin}</li>
                </ul>
                <br/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}