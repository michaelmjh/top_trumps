import { useState } from 'react';
import PlayerDeck from "./playerDeck/PlayerDeck";
import PlaySpace from "./playSpace/PlaySpace";


function GamePage({selectedPlayer, playerDeck, aiDeck}) {

    const[selectedPlayerCard, setSelectedPlayerCard] = useState();

    const cardSelectedByPlayer = (card) => {
        setSelectedPlayerCard(card);
    }

    return (
        <>
            <h1>Game Page</h1>
            <PlaySpace />
            <PlayerDeck 
                playerDeck={playerDeck}
                cardSelectedByPlayer={cardSelectedByPlayer}
            />
        </>
    );
}

export default GamePage;