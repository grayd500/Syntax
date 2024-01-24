import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const StyledTableContainer = styled(TableContainer)({
  margin: "auto",
  maxWidth: "90%",
  overfloxX: "auto",
  marginBottom: "40px",
  
});

const StyledTable = styled(Table)({
  minWidth: 300,
});

function createData(description, date, location, venue, tickets) {
  return { description, date, location, venue, tickets };
}

const rows = [
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData('Digital Dreamscape Festival', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
];

export default function Tour() {
  return (
    <StyledTableContainer component={Paper} style={{ marginTop: '8rem', marginBottom: '11rem' }}>
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
          {rows.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.venue}</StyledTableCell>
              <StyledTableCell align="right">{row.tickets}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}