import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ContactCard from './ContactCard';
import { useEffect } from 'react';
import axios from 'axios';
 
//  import Accordion from '@mui/material';

import Accordions from './Accordion';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const[data,setData]=React.useState([])
  
  
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://web-dev.dev.kimo.ai/v1/categories', {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET',
        }});
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
       
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Accordions/>
        </Grid>
       
        <Grid item xs={6}>
        
         <ContactCard/>
        </Grid>
      </Grid>
    </Box>
  );
}