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
    const [playerDeck, setPlayerDeck] = useState([]);
    const [aiDeck, setAiDeck] = useState([]);

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
        populatePlayerDeck();
        populateAiDeck();
    }

    const playerDetailsClicked = () => {
        console.log("PLAYER DETAILS CLICKED");
    }

    const deletePlayerClicked = (player) => {
        const idToDelete = player._id;
        PlayerService.deletePlayer(idToDelete);
        setAllPlayers(allPlayers.filter(player => player._id !== idToDelete));
    }

    const generateRandomDeck = () => {
        let index = 0;
        let newRandomDeck = [];
        while (newRandomDeck.length < 5){
            let index = Math.floor(Math.random() * allCards.length);
            if (!newRandomDeck.includes(allCards[index])){
                newRandomDeck.push(allCards[index]);
            }
        }
        return newRandomDeck
    }

    const sortDeck = (deck) => {
        const sortedDeck = deck.sort((a, b) => (a.name > b.name) ? 1 : -1);
        return sortedDeck;
    }

    const populatePlayerDeck = () => {
        const newPlayerDeck = generateRandomDeck();
        const sortedPlayerDeck = sortDeck(newPlayerDeck);
        setPlayerDeck(sortedPlayerDeck);
    }

    const populateAiDeck = () => {
      const newAiDeck = generateRandomDeck();
      setAiDeck(newAiDeck);
    }

    const removeCardFromPlayerDeck = (cardToRemove) => {
        let playerDeckCopy = [...playerDeck]
        for (let i = 0; i < playerDeckCopy.length; i++) {
            if (cardToRemove._id === playerDeckCopy[i]._id) {
                playerDeckCopy.splice(i, 1)
            }
        }
        setPlayerDeck(playerDeckCopy);
    }

    const returnCardToPlayerDeck = (card) => {
        let playerDeckCopy = [...playerDeck, card];
        sortDeck(playerDeckCopy);
        setPlayerDeck(playerDeckCopy);
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
                            selectedPlayer={selectedPlayer}
                            playerDeck={playerDeck}
                            aiDeck={aiDeck}
                            removeCardFromPlayerDeck={removeCardFromPlayerDeck}
                            returnCardToPlayerDeck={returnCardToPlayerDeck}
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