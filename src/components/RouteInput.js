
import React, { useState } from 'react';
import { TextField, Button,Stack  } from '@mui/material';
import './RouteInput.css';


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
<Stack spacing={2} alignItems="center">
        <TextField
          label="מוצא"
          variant="outlined"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <TextField
          label="יעד"
          variant="outlined"
          value={destination}
          onChange={(e) => setDestination(e.target.value)} 
        />
        <TextField
          label="תאריך"
          variant="outlined"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="שעה"
          variant="outlined"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)} 
          InputLabelProps={{
            shrink: true,
          }}
        />
     <Button
  variant="contained"
  color="primary"
  onClick={handleCalculateClick} // קריאה ישירה לפונקציה
>
  חשב צד ישיבה מומלץ
</Button>

        </Stack>
  );

}
export default RouteInput
