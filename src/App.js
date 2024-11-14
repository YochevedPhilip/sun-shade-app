
import RouteInput from './components/RouteInput';
import RouteRecommendation from './components/RouteRecommendation';
import { Typography, Container, Divider, BusIcon } from '@mui/material';
import { useState, useEffect } from 'react';
import EventSeatIcon from '@mui/icons-material/EventSeat';





  function App() {
    document.body.style.backgroundColor = '#f0f4f8';
    const [routeData, setRouteData] = useState(null); 
  
    const handleCalculateClick = (data) => { 
      console.log("Data received:", data); // הדפסת הנתונים לצורך דיבוג

      setRouteData(data);
    }; 


  useEffect(() => {
    console.log("Route data updated:", routeData); // דיבוג: הנתונים לאחר העדכון
  }, [routeData]); // יפעל בכל פעם ש-routeData משתנה

    console.log("Route data in App:", routeData); // הוספת הדפסת נתונים כאן

  return (
  <Container maxWidth="sm" style={{ marginTop: '40px', padding: '20px', 
    borderRadius: '8px', 
    backgroundColor: '#ffffff'  }}>
    <Typography
     variant="h4" 
     component="h1" 
     gutterBottom 
     style={{ textAlign: 'right', fontSize: '2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column' }}>
      <EventSeatIcon style={{ marginRight: '10px' }} />
      <span>The Right Seat</span>
      <span style={{ fontSize: '1.2rem', marginTop: '5px' }}>

מצא את המושב האולטימטיבי שלך בהתאם למיקום השמש לאורך מסלול הנסיעה
</span>
    </Typography>
    <RouteInput onCalculate={handleCalculateClick} />
    {routeData && (<>
      <Divider style={{ margin: '30px 0', backgroundColor: '#b0c4de' }} />

      <RouteRecommendation {...routeData} />

    </>
  )}
    
  </Container>
);
}

export default App;
