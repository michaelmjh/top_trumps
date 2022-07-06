import React from 'react';

function PlayerListItem({player, playerDetailsClicked}) {
  
    const handlePlayerDetailsClick = () => {
      playerDetailsClicked();
    }
  
    return (
        <>
            <img src={player.avatar} alt="player.name" height="50px"/>
            <h3>Name: {player.name}</h3>
            <p>Wins: {player.wins}</p>
            <button onClick={handlePlayerDetailsClick}>PlayerDetails</button>
            <hr />
        </>
    );
}

export default PlayerListItem;