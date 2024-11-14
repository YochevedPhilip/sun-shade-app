import './App.css';
import RouteInput from './components/RouteInput';
import RouteRecommendation from './components/RouteRecommendation';
import { Typography, Container } from '@mui/material';
import { useState, useEffect } from 'react';




  function App() {
    const [routeData, setRouteData] = useState(null); 
  
    const handleCalculateClick = (data) => { 
      console.log("Data received:", data); // הדפסת הנתונים לצורך דיבוג

      setRouteData(data);
    }; 


  useEffect(() => {
    console.log("Route data updated:", routeData); // דיבוג: הנתונים לאחר העדכון
  }, [routeData]); // יפעל בכל פעם ש-routeData משתנה

    console.log("Route data in App:", routeData); // הוספת הדפסת נתונים כאן

  return (<Container>
    <Typography variant="h4" component="h1" gutterBottom>
      תוכנה להמלצה על צד ישיבה באוטובוס
    </Typography>
    <RouteInput onCalculate={handleCalculateClick} />
    {routeData && <RouteRecommendation {...routeData} />}
  </Container>
);
}

export default App;
