import React, { useState, useEffect } from 'react';
import './App.css';
import Landing from './pages/LandingPage/Landing';
import Header from './components/Header/Header'
import Details from './pages/DetailsPage/Details'

function App() {
  const [showList, setShowList] = useState([])
  const [showId,setShowId] = useState(null);

  useEffect(()=>{
    fetch(`http://api.tvmaze.com/shows`)
    .then(res => res.json())
    .then(showList => setShowList(showList))
  },[])

  const getShowId = (showID) =>{
    setShowId(showID);
  }

  return (
    <div className="App">
      <Header />
      {!showId ? <Landing tvshows = {showList} getshowid ={getShowId}/> : <Details/> }
      
   
    </div>
  );
}

export default App;
