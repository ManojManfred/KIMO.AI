import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ellipseImage from './TestImages/Ellipse.png';

const ContactCard = () => {
  return (
    <Card
      sx={{
        position: 'absolute',
        width: 560,
        height: 176,
        left: 764,
        background: '#FFFFFF',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 24, fontWeight: 700 }}>Hadwin Malone</div>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ styleName: 'Body', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 400, letterSpacing: '0em', textAlign: 'left' }}>
          Guide since 2012
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontFamily: 'Greycliff CF',
            fontSize: 10,
            backgroundColor: 'white',
            fontWeight: 300,
            textAlign: 'center',
            color: '#008080',
            marginTop: 2,
            border: '2px solid #008080',
            '&:hover': {
              background: 'white',
              color: '#008080',
            },
          }}
        >
          Contact
        </Button>
      </CardContent>
      <div style={{ marginLeft: 'auto', marginRight: 24 }}>
        <CardMedia
          component="img"
          src={ellipseImage}
          alt="Profile Picture"
          sx={{
            height: '128px',
            width: '128px',
            borderRadius: '50%',
          }}
        />
      </div>
    </Card>
  );
};

export default ContactCard;
