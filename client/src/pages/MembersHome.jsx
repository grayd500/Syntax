import React, { useRef, useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// Common components and styles
const GeneralContainer = styled('div')({
  marginTop: '7rem',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',

});

const FormContainer = styled('div')({
  width: '35%', // Adjust the width as needed
  boxSizing: 'border-box',
  marginRight: '1px',
  marginTop: '5px',
  '@media (max-width: 768px)': {
    width: '70%',
    marginBottom: '25px'
  },
  '@media (max-width: 480px)': {
    width: '70%',
  },
});

const StyledTableContainer = styled(TableContainer)({
  margin: '5px',
  maxWidth: '59%',
  overflowX: 'auto',
  marginBottom: '40px',
  border: '1px solid white',
  borderRadius: '8px',
  boxShadow: '0px 0px 20px 10px #447AC2ff',
  cursor: 'grab',
  '@media (max-width: 768px)': {
    maxWidth: '80%', // For medium screens
    cursor: 'grab',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
  },
  '@media (max-width: 480px)': {
    maxWidth: '100%', // For small screens
    cursor: 'grab',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
  },
  '&:grabbing': {
    cursor: 'grabbing',
  },
});

const StyledTable = styled(Table)({
  minWidth: 300,
  border: '2px solid white',
  borderRadius: '8px',
  '@media (max-width: 768px)': {
    minWidth: 'unset',
    whiteSpace: 'nowrap',
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#241742ff',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#447AC2ff',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#DA1279ff',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StyledButton = styled(Button)({
  margin: '8px', // Add margin as needed
});

// GraphQL Queries and Mutations
const GET_EVENTS = gql`
  query GetEvents {
    events {
      _id
      description
      date
      location
      venue
      ticket
    }
  }
`;

const ADD_EVENT = gql`
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

const UPDATE_EVENT = gql`
  mutation UpdateEvent($_id: ID!, $input: EventInput!) {
    updateEvent(_id: $_id, input: $input) {
      _id
      description
      date
      location
      venue
      ticket
    }
  }
`;

const DELETE_EVENT = gql`
  mutation DeleteEvent($_id: ID!) {
    deleteEvent(_id: $_id)
  }
`;


const TourForm = ({ formName, handleAdd }) => {
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [ticket, setTicket] = React.useState("");

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { description, date, location, venue, ticket };
    handleAdd(formData);
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
        <label htmlFor={`${formName}-ticket`} className="leading-7 text-sm text-white">
          Tickets
        </label>
        <textarea
          id={`${formName}-ticket`}
          name="ticket"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{ textShadow: '2px 2px 5px rgba(169, 169, 169, 0.8)' }}
          onChange={(e) => setTicket(e.target.value)}
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

export default function MembersHome() {
  const { loading, error, data } = useQuery(GET_EVENTS);
  const [addEvent] = useMutation(ADD_EVENT);
  const [updateEvent] = useMutation(UPDATE_EVENT);
  const [deleteEvent] = useMutation(DELETE_EVENT);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const tableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - tableRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const scrollLeft = e.pageX - startX;
    tableRef.current.scrollLeft = scrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setEditModalOpen(true);
  };

  const handleDelete = async (_id) => {
    try {
      await deleteEvent({ variables: { _id } });
      // Refetch events or update local cache as needed
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  const handleUpdate = async (updatedEvent) => {
    try {
      await updateEvent({
        variables: { _id: updatedEvent._id, input: updatedEvent },
      });
      // Refetch events or update local cache as needed
      setEditEvent(null);
      setEditModalOpen(false);
    } catch (error) {
      console.error('Error updating event:', error.message);
    }
  };

  // Function to handle adding an event
  const handleAdd = async (formData) => {
    try {
      await addEvent({
        variables: { input: formData },
      });
      // Refetch events or update local cache as needed
      alert("Event added!");
    } catch (error) {
      console.error('Error adding event:', error.message);
      alert("Error adding event. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <GeneralContainer>
      {/* Add Tour Form */}
      <FormContainer>
        <TourForm formName="add" handleAdd={handleAdd} />
      </FormContainer>
      <StyledTableContainer
        ref={tableRef}
        component={Paper}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <StyledTable aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Venue</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.events.map((event) => (
              <StyledTableRow key={event._id}>
                <StyledTableCell component="th" scope="row">
                  {event.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {new Date(event.date).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {event.location}
                </StyledTableCell>
                <StyledTableCell align="right">{event.venue}</StyledTableCell>
                <StyledTableCell align="right">
                  <StyledButtonContainer>
                    <StyledButton
                      variant="contained"
                      style={{ backgroundColor: '#241742ff', color: 'white' }}
                      onClick={() => handleEdit(event)}
                    >
                      Edit
                    </StyledButton>
                    <StyledButton
                      variant="contained"
                      style={{ backgroundColor: '#DA1279ff', color: 'white' }}
                      onClick={() => handleDelete(event._id)}
                    >
                      Delete
                    </StyledButton>
                  </StyledButtonContainer>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>

      {/* Edit Modal */}
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <div>
          <h2>Edit Event</h2>
          {editEvent && (
            <div>
              {/* You can replace the input fields with your own form components */}
              <TextField
                label="Description"
                defaultValue={editEvent.description}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, description: e.target.value })
                }
              />
              <TextField
                label="Date"
                defaultValue={editEvent.date}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, date: e.target.value })
                }
              />
              <TextField
                label="Location"
                defaultValue={editEvent.location}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, location: e.target.value })
                }
              />
              <TextField
                label="Venue"
                defaultValue={editEvent.venue}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, venue: e.target.value })
                }
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdate(editEvent)}
              >
                Update
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </GeneralContainer>
  );
}
