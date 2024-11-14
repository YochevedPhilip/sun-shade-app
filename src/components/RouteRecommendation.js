import React from 'react';
import { Typography, Paper } from '@mui/material';

const RouteRecommendation = ({ departure, destination, date, time }) => {
    console.log("RouteRecommendation data:", { departure, destination, date, time }); // לבדוק אם הנתונים תקינים

  const recommendedSide = 'ימין';

  return (
    <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
      <Typography variant="h6" component="h2">
        תוצאה:
      </Typography>
      <Typography>
        למסלול בין {departure} ל-{destination} בתאריך {date} בשעה {time}
      </Typography>
      <Typography variant="body1">
        מומלץ לשבת בצד {recommendedSide}
      </Typography>
    </Paper>
  );
};

export default RouteRecommendation;
