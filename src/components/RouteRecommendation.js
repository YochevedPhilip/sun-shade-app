import React from 'react';
import { Typography, Paper } from '@mui/material';

const RouteRecommendation = ({ departure, destination, date, time }) => {
    console.log("RouteRecommendation data:", { departure, destination, date, time }); // לבדוק אם הנתונים תקינים

  const recommendedSide = 'ימין';

  return (
    <Paper 
    elevation={3} 
    style={{
       padding: '20px',
       marginTop: '30px',
       backgroundColor: '#e8f0fe', // רקע מעט כהה כדי להבליט
       textAlign: 'right',
       direction: 'rtl',
       border: '1px solid #b0c4de', // מסגרת עדינה בצבע אפור כחלחל
       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // צל עדין להוספת עומק
       borderRadius: '8px' // פינות מעוגלות יותר למראה עדין
         }}>
      <Typography variant="h6" component="h2"style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '10px' }}>
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
