import React from 'react';
import PlayerListItem from './PlayerListItem';

function PlayerList({allPlayers, startGameClicked, playerDetailsClicked, deletePlayerClicked}) {
  
    const playerNodes = allPlayers.map((player, index) => {
        return (
            <PlayerListItem 
                key={index} 
                player={player} 
                startGameClicked = {startGameClicked}
                playerDetailsClicked={playerDetailsClicked} 
                deletePlayerClicked={deletePlayerClicked}
            />
        )
    })
  
    return (
        <>
            <h1>PlayerList</h1>
            {playerNodes}
        </>
    );
}

export default PlayerList;