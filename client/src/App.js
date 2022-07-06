import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './home/HomePage';
import PlayerSelectPage from './players/PlayerSelectPage';

const App = () => {

  const [allPlayers, setAllPlayers] = useState([
    {
        name: "Kieran",
        avatar: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        wins: 3,
        draws: 1,
        losses: 2, 
        deck: []
    },
    {
        name: "Lou",
        avatar: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        wins: 5,
        draws: 0,
        losses: 0, 
        deck: []
    },
    {
        name: "Michael",
        avatar: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
        wins: 7,
        draws: 1,
        losses: 1, 
        deck: []
    }
]);
  
  const playerSelectClicked = () => {
    console.log("player select clicked");
  }

  const playerDetailsClicked = () => {
    console.log("PLAYER DETAILS CLICKED");
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage playerSelectClicked={playerSelectClicked} />} />
        <Route exact path="/playerSelect" element={<PlayerSelectPage allPlayers={allPlayers} playerDetailsClicked={playerDetailsClicked}/>} />
      </Routes>
    </Router>
  );
}

export default App;