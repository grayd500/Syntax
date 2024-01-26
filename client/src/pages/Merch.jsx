import { useEffect, useState } from "react";
import { Grid, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
const seedMerch = await import('../../../server/seeds/merchSeed');
await seedMerch.default(); // Call the default export of the module

export default function Merch() {
  const [merchData, setMerchData] = useState([]);

  useEffect(() => {
    const fetchMerchData = async () => {
      try {
        await seedMerch();
        // Make an API request to fetch the merch data from the server
        const response = await fetch('../../../server/routes/api/merchRoute.js');  // Update the API endpoint
        const data = await response.json();
        setMerchData(data); // Update the merchData state with fetched data
      } catch (error) {
        console.error('Error fetching merch data', error);
      }
    }

    fetchMerchData(); // Call the fetchMerchData function
  }, []);

  return (
    <section id="Merch" style={{ marginTop: '7rem', marginBottom: '12rem' }}>
      <div className="container px-5 py-10 mx-auto">
        <Grid container spacing={4}>
          {[0, 1].map((row) => (
            <Grid container item key={row} justifyContent="center" spacing={4}>
              {merchData.map((item, col) => (
                <Grid item key={col}>
                  <Card variant="outlined" style={{ width: '300px', height: '200px' }}>
                    <CardContent>
                      <img src={item.imageUrl} />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p>Price: ${item.price}</p>
                    </CardContent>
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
