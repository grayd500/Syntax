import React, { useState } from 'react';
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

const GeneralContainer = styled('div')({
  marginTop: '7rem',
});

const StyledTableContainer = styled(TableContainer)({
  margin: 'auto',
  maxWidth: '65%',
  overflowX: 'auto',
  marginBottom: '40px',
  border: '1px solid white',
  boxShadow: '0px 0px 20px 10px #447AC2ff',
  '@media (max-width: 768px)': {
    maxWidth: '80%', // For medium screens
  },
  '@media (max-width: 480px)': {
    maxWidth: '100%', // For small screens
  },
});

const StyledTable = styled(Table)({
  minWidth: 300,
  border: '2px solid white',
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

export default function Tour() {
  const { loading, error, data } = useQuery(GET_EVENTS);
  const [updateEvent] = useMutation(UPDATE_EVENT);
  const [deleteEvent] = useMutation(DELETE_EVENT);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <GeneralContainer>
      <StyledTableContainer component={Paper}>
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
