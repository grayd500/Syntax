import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_EVENT_MUTATION = gql`
  mutation AddEvent($input: EventInput!) {
    addEvent(input: $input) {
      _id
      description
      date
      location
      venue
      ticket
    }
  }
`;

const AddEventForm = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [venue, setVenue] = useState('');
  const [ticket, setTicket] = useState('');

  const [addEvent] = useMutation(ADD_EVENT_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      description,
      date,
      location,
      venue,
      ticket,
    };

    try {
      const { data } = await addEvent({
        variables: {
          input: formData,
        },
      });

      // Check if the mutation was successful
      if (data && data.addEvent) {
        console.log('Event added successfully:', data.addEvent);
        // Clear the form or perform any other actions
        // Example: Reset form fields
        setDescription('');
        setDate('');
        setLocation('');
        setVenue('');
        setTicket('');
      } else {
        console.error(
          'Error adding event: No data received from the mutation.'
        );
      }
    } catch (error) {
      console.error('Error adding event:', error.message);
    }
  };
};
export default AddEventForm;
