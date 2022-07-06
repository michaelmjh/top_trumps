import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

function PlayerSelectPage({allPlayers, playerDetailsClicked}) {
  
    
  
    return (
        <>
            <h1>Player Select Page</h1>
            <PlayerForm />
            <PlayerList allPlayers={allPlayers} playerDetailsClicked={playerDetailsClicked}/>
        </>
    );
}

export default PlayerSelectPage;