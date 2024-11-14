
import React, { useState } from 'react';
import { TextField, Button,Grid  } from '@mui/material';



const RouteInput = ({onCalculate}) => {
const [departure, setDeparture] = useState('');
const [destination, setDestination] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');

const handleCalculateClick = () => {
    console.log("Form submitted with:", { departure, destination, date, time }); // בדוק את הערכים לפני שליחתם

    onCalculate({ departure, destination, date, time });
  };
  


  return ( 
<Grid container spacing={2} justifyContent="center" direction="rtl">

<Grid item xs={12} sm={6}>
          <TextField
          label="מוצא"
          variant="outlined"
          fullWidth
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          InputProps={{ style: { textAlign: 'left' } }} 
        />
         </Grid>
         <Grid item xs={12} sm={6}>
        <TextField
          label="יעד"
          variant="outlined"
          fullWidth
          value={destination}
          onChange={(e) => setDestination(e.target.value)} 
          InputProps={{ style: { textAlign: 'left' } }} 

        />
         </Grid>

         <Grid item xs={12} sm={6}>
        <TextField
          label="תאריך"
          variant="outlined"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true, style: { textAlign: 'left'}
          }}
        />
         </Grid>
         <Grid item xs={12} sm={6}>
        <TextField
          label="שעה"
          variant="outlined"
          type="time"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)} 
          InputLabelProps={{
            shrink: true, style: { textAlign: 'left' }
          }}
        />
          </Grid>
          <Grid item xs={12}>
     <Button
  variant="contained"
  color="primary"
  onClick={handleCalculateClick} // קריאה ישירה לפונקציה
  style={{ marginLeft: 'auto', marginRight: 0, display: 'block', fontSize: '1rem', padding: '10px 20px'  }}
  
>
  חשב צד ישיבה מומלץ
</Button>
</Grid>
</Grid>
  );

}
export default RouteInput
