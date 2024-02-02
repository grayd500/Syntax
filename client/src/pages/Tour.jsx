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

const GeneralContainer = styled('div')({
  marginTop: '7rem',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const StyledTableContainer = styled(TableContainer)({
  margin: 'auto',
  maxWidth: '65%',
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
  // '&:grabbing': {
  //   cursor: 'grabbing',
  // },
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

export default function Tour() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

  return (
    <GeneralContainer>
      <StyledTableContainer
        ref={tableRef}
        component={Paper}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
        <StyledTable aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Venue</StyledTableCell>
              <StyledTableCell align="right">Tickets</StyledTableCell>
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
                  <a
                    href={event.ticket}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#241742ff', color: 'white' }}
                    >
                      Get Tickets
                    </Button>
                  </a>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </GeneralContainer>
  );
}
