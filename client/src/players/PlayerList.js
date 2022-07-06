import React from 'react';
import PlayerListItem from './PlayerListItem';

function PlayerList({allPlayers, playerDetailsClicked}) {
  
    const playerNodes = allPlayers.map((player, index) => {
        return (
            <PlayerListItem key={index} player={player} playerDetailsClicked={playerDetailsClicked} />
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