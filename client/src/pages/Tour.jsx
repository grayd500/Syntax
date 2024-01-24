import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const GeneralContainer = styled('div')({
  marginTop: '8rem',
  marginBottom: '1rem',
});
const StyledTableContainer = styled(TableContainer)({
  margin: "auto",
  maxWidth: "70%",
  overflowX: "auto",
  marginBottom: "40px",
});

const StyledTable = styled(Table)({
  minWidth: 300,
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

function createData(id, description, date, location, venue, tickets) {
  return {id, description, date, location, venue, tickets };
}

const rows = [
  createData(1, 'Digital Dreamscape Festival1', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(2, 'Digital Dreamscape Festival2', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(3, 'Digital Dreamscape Festival3', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(4, 'Digital Dreamscape Festival4', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(5, 'Digital Dreamscape Festival5', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(6,'Digital Dreamscape Festival6', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(7, 'Digital Dreamscape Festival7', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(8, 'Digital Dreamscape Festival8', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
  createData(9, 'Digital Dreamscape Festival9', 'June 12, 2024', 'Austin, Texas', 'Zilker Park', 'https://frontgatetickets.com'),
];

export default function Tour() {
  return (
    <GeneralContainer>
    <StyledTableContainer component={Paper} >
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
            <StyledTableRow key={row.description}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.venue}</StyledTableCell>
              <StyledTableCell align="right">
              <a href={row.tickets} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" style={{ backgroundColor: '#241742ff', color: 'white' }}>
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