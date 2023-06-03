import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Accordions = () => {
  return (
    <div>
      <div style={{marginBottom:8}}>
      <Accordion
        sx={{
          height: 20,
          width: 580,
          left: 152,
          Radius: 10,
          paddingBottom:4,
          justifyContent: 'space-between',
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIcon />}
          aria-controls="accordion-content"
          id="accordion-header"
        > <div style={{fontFamily:'IBM Plex Mono',fontSize:16}}>Adventure</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Surfing</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{marginBottom:8}}>
      <Accordion
        sx={{
          height: 20,
          width: 580,
          left: 152,
          Radius: 10,
          paddingBottom:4,
          justifyContent: 'space-between',
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIcon />}
          aria-controls="accordion-content"
          id="accordion-header"
        > <div style={{fontFamily:'IBM Plex Mono',fontSize:16}}>Culinary</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Surfing</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    
      <div style={{marginBottom:8}}>
      <Accordion
        sx={{
          height: 20,
          width: 580,
          left: 152,
          Radius: 10,
          paddingBottom:4,
          justifyContent: 'space-between',
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIcon />}
          aria-controls="accordion-content"
          id="accordion-header"
        > <div style={{fontFamily:'IBM Plex Mono',fontSize:16}}>Eco-tourism</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Surfing</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      <div style={{marginBottom:8}}>
      <Accordion
        sx={{
          height: 20,
          width: 580,
          left: 152,
          Radius: 10,
          paddingBottom:4,
          justifyContent: 'space-between',
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIcon />}
          aria-controls="accordion-content"
          id="accordion-header"
        > <div style={{fontFamily:'IBM Plex Mono',fontSize:16}}>Family</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Surfing</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      <div style={{marginBottom:8}}>
      <Accordion
        sx={{
          height: 20,
          width: 580,
          left: 152,
          Radius: 10,
          paddingBottom:4,
          justifyContent: 'space-between',
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIcon />}
          aria-controls="accordion-content"
          id="accordion-header"
        > <div style={{fontFamily:'IBM Plex Mono',fontSize:16}}>Sport</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Surfing</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>

    
  );
};

export default Accordions;
