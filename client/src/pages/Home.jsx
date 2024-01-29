import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useAuth } from '../AuthContext'; // Import useAuth

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [responses, setResponses] = useState([]);
  const { isAuthenticated } = useAuth(); // Use the useAuth hook

  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [responses]);

  useEffect(() => {
    const storedResponses = localStorage.getItem('responses');
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim() !== '') {
      const truncatedFeedback = feedback.slice(0, 70);
      setResponses((prevResponses) => [...prevResponses, truncatedFeedback]);
      setFeedback('');
    }
  };

  return (
    <div className="text-center my-8 md:flex md:flex-wrap"
      style={{
        marginTop: "120px",
        marginBottom: "55px"
      }}
    >
      {/* Rest of the JSX elements related to album info, audio player, etc... */}

      <div id="feedback-list" className="order-3 mt-8 text-left flex justify-left items-start"
        style={{
          fontSize: '14px',
          color: '#398FD4ff'
        }}
      >
        <ul>
          {responses.slice(-5).map((response, index) => (
            <li key={index}>
              {response}
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-xl mt-8"
        style={{
          color: '#E53179ff',
        }}
      >
        Let us know what you think!
      </h2>

      {/* Conditional rendering based on authentication */}
      {isAuthenticated && (
        <div className="mt-4">
          <input
            type="text"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder='Feedback and name!'
            className="p-2 bg-white mr-2 text-sm rounded-md pr-10 pl-4 md:w-1/3"
          />
          <button
            onClick={handleSubmit}
            className="p-2 px-4 text-sm cursor-pointer text-white rounded-md"
            style={{
              backgroundColor: '#E53179ff'
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
