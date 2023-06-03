import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import surfing from '../TestImages/SURFING.png';
import last from '../TestImages/last.png';
import middle from '../TestImages/middle.png';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardComponent = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        marginLeft: '13%',
        '@media screen and (max-width: 768px)': {
          width: '100%',
          marginLeft: 0,
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="40%" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div
              style={{
                fontFamily: 'IBM Plex Mono',
                fontSize: 27,
                fontWeight: 700,
                color: '#008080',
              }}
            >
              {title}
            </div>
          </Typography>
          <Typography variant="body2">
            <div
              style={{
                fontFamily: 'IBM Plex Mono',
                fontSize: 20,
              }}
            >
              {description}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{ marginLeft: 190, color: '#008080' }}>
          <ArrowForwardIcon />
        </div>
      </CardActions>
    </Card>
  );
};

export default function MultiActionAreaCard(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CardComponent
        image={surfing}
        title="Surfing"
        description="Best Hawaiian islands for surfing"
      />
      <CardComponent
        image={middle}
        title="Hula"
        description="Try it yourself"
      />
      <CardComponent
        image={last}
        title="Volcanoes"
        description="Volcanic conditions can change at any time"
      />
    </div>
  );
}
