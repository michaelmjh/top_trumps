import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './home/HomePage';
import PlayerSelectPage from './players/PlayerSelectPage';
import PlayerService from './services/PlayerService';
import CardService from './services/CardService';
import GamePage from './game/GamePage';
import EditPlayer from './editPlayer/EditPlayer'

const App = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [allCards, setAllCards] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        PlayerService.getPlayers()
        .then(players => setAllPlayers(players))
    }, [allPlayers]);

    useEffect(() => {
        CardService.getCards()
        .then(cards => setAllCards(cards))
    }, []);

    const playerSelectClicked = () => {
        console.log("player select clicked");
    }

    const createPlayer = (newPlayer) => {
        PlayerService.addPlayer(newPlayer)
        .then(savedPlayer => setAllPlayers([...allPlayers, savedPlayer]));
    };

    const startGameClicked = (player) => {
        setSelectedPlayer(player);
        //setplayerDeck
        //setcomputerDeck
    }

    const playerDetailsClicked = () => {
        console.log("PLAYER DETAILS CLICKED");
    }

    const deletePlayerClicked = (player) => {
        const idToDelete = player._id;
        PlayerService.deletePlayer(idToDelete);
        setAllPlayers(allPlayers.filter(player => player._id !== idToDelete));
    }

    return (
        <>  
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <HomePage 
                            playerSelectClicked={playerSelectClicked} 
                        />} 
                    />
                    <Route exact path="/playerSelect" element={
                        <PlayerSelectPage 
                            allPlayers={allPlayers}
                            createPlayer={createPlayer}
                            startGameClicked={startGameClicked}
                            playerDetailsClicked={playerDetailsClicked}
                            deletePlayerClicked={deletePlayerClicked}
                        />}
                    />
                    <Route exact path="/game" element={
                        <GamePage
                        />} 
                    />
                    <Route exact path="/editPlayer" element={
                        <EditPlayer
                        />} 
                    />
                </Routes>
            </Router> 
        </>
    );
}

export default App;