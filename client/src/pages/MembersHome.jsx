
import React from "react";

const TourForm = ({ formName }) => {
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [tickets, setTickets] = React.useState("");

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { "form-name": formName, description, date, location, venue, tickets };
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => {
        alert("Message sent!");
        e.target.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <form
      name={formName}
      onSubmit={handleSubmit}
      className="order-2 md:order-1 h-auto md:w-2/3 sm:w-5/6 mx-auto flex flex-col lg:w-2/3 md:py-8 mt-8 md:mt-0 text-left lg:mr-20 lg:ml-16"
      style={{
        border: '1px solid white',
        backgroundSize: "100% 105%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: '0px 0px 30px 10px #8a2be2',
        marginBottom: "10px",
      }}
    >
      <h2 className="text-white sm:text-2xl text-1xl mb-1 font-medium title-font text-center" style={{ textShadow: '0 0 5px rgba(0, 0, 255, 1)' }}>
        {formName === "add" ? "Add Tour Date" : formName === "update" ? "Update Tour Date" : "Delete Tour Date"}
      </h2>

      <div className="relative mb-4">
        <label htmlFor={`${formName}-description`} className="leading-7 text-sm text-white">
          Description
        </label>
        <input
          type="text"
          id={`${formName}-description`}
          name="description"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor={`${formName}-date`} className="leading-7 text-sm text-white">
          Date
        </label>
        <input
          type="date"
          id={`${formName}-date`}
          name="date"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor={`${formName}-location`} className="leading-7 text-sm text-white">
          Location
        </label>
        <textarea
          id={`${formName}-location`}
          name="location"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ textShadow: '2px 2px 5px rgba(169, 169, 169, 0.8)' }}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor={`${formName}-venue`} className="leading-7 text-sm text-white">
          Venue
        </label>
        <textarea
          id={`${formName}-venue`}
          name="venue"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ textShadow: '2px 2px 5px rgba(169, 169, 169, 0.8)' }}
          onChange={(e) => setVenue(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor={`${formName}-tickets`} className="leading-7 text-sm text-white">
          Tickets
        </label>
        <textarea
          id={`${formName}-tickets`}
          name="tickets"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ textShadow: '2px 2px 5px rgba(169, 169, 169, 0.8)' }}
          onChange={(e) => setTickets(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg"
        style={{ backgroundColor: '#E53179ff' }}
      >
        Submit
      </button>
    </form>
  );
};

export default function Contact() {
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
        {/* Add Tour */}
        <TourForm formName="add" />

        {/* Update Tour */}
        <TourForm formName="update" />

        {/* Delete Tour */}
        <TourForm formName="delete" />
      </div>
    </section>
  );
}

