import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

function PlayerSelectPage({allPlayers, createPlayer, startGameClicked, playerDetailsClicked, deletePlayerClicked}) {

    return (
        <>
            <h1>Player Select Page</h1>
                <PlayerForm createPlayer={createPlayer}/>
                <PlayerList 
                    allPlayers={allPlayers} 
                    startGameClicked={startGameClicked}
                    playerDetailsClicked={playerDetailsClicked}
                    deletePlayerClicked={deletePlayerClicked}
                />
            
        </>
    );
}

export default PlayerSelectPage;