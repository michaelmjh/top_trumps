import React from 'react';
import {Link} from 'react-router-dom';

function PlayerListItem({player, startGameClicked, playerDetailsClicked, deletePlayerClicked}) {
  
    const handleStartGameClick = () => {
        startGameClicked(player)
    }
    const handlePlayerDetailsClick = () => {
        playerDetailsClicked();
    }

    const handleDeletePlayerClick = () => {
        deletePlayerClicked(player);
    }

    const handleEditPlayerClick = () => {
        console.log("update");
    }

    return (
        <>
            <img src={player.avatar} alt="player.name" height="50px"/>
            <h3>Name: {player.name}</h3>
            <p>Wins: {player.wins}</p>
            <Link to="/game">
                <button onClick={handleStartGameClick}>Start Game</button>
            </Link>
            <button onClick={handlePlayerDetailsClick}>Player Details</button>
            <button onClick={handleDeletePlayerClick}>Delete Player</button>
            <Link to="/editPlayer">
                <button onClick={handleEditPlayerClick}>Edit Player Details</button>
            </Link>
            <hr />
        </>
    );
}

export default PlayerListItem;