import React from "react";
import { Grid, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Merch() {
  return (
    <section id="Merch">
      <div className="container px-5 py-10 mx-auto">
        <Grid container spacing={4}>
          {[0, 1].map((row) => (
            <Grid container item key={row} justifyContent="center" spacing={4}>
              {[0, 1, 2].map((col) => (
                <Grid item key={col}>
                  <Card variant="outlined" style={{ width: '300px', height: '200px' }}>
                    <CardContent>{/* Your card content goes here */}Placeholder</CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
