import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid, Card, CardContent } from '@mui/material';

// GraphQL query
const GET_MERCH = gql`
  query GetMerch {
    merch {
      _id
      title
      description
      price
      imageUrl
      category
      size
    }
  }
`;

export default function Merch() {
  const { loading, error, data } = useQuery(GET_MERCH);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="Merch" style={{ marginTop: '7rem', marginBottom: '12rem' }}>
      <div className="container px-5 py-10 mx-auto" >
        <Grid container spacing={4} >
          {data.merch.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4} >
              <Card 
                className="merchCard"  
                style={{ 
                  backgroundColor: 'black',
                  color: 'white',
                  boxShadow: '0px 0px 5px 5px cyan'}}>
                <img
                  className="merchPic"
                  src={item.imageUrl}
                  alt={item.title}
                  
                />
                <CardContent >
                  <h3 style={{ fontWeight: 'bold', fontSize: 'larger' }}>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  {/* Display size if available */}
                  {item.size && <p>Size: {item.size}</p>}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
