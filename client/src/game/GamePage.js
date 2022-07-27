import { useEffect, useState } from 'react';
import PlayerDeck from "./playerDeck/PlayerDeck";
import PlaySpace from "./playSpace/PlaySpace";


function GamePage({selectedPlayer, playerDeck, aiDeck, removeCardFromPlayerDeck, returnCardToPlayerDeck}) {

    const [playerTurn, setPlayerTurn] = useState();
    const [selectedPlayerCard, setSelectedPlayerCard] = useState();
    const [selectedSkill, setSelectedSkill] = useState();

    useEffect(() => {
        setPlayerTurn(true);
    }, []);

    const cardSelectedByPlayer = (card) => {
        setSelectedPlayerCard(card);
        removeCardFromPlayerDeck(card);
    }

    const resetSelectedPlayerCard = () => {
        setSelectedPlayerCard();
    }

    const skillSelected = (skill) => {
        setSelectedSkill(skill);
    }

    const resetSelectedSkill = () => {
        setSelectedSkill();
    }

    const playRoundSelected = () => {
        console.log("play round gamepage");
    }

    return (
        <>
            <h1>Game Page</h1>
            <PlaySpace
                playerTurn={playerTurn}
                selectedPlayerCard={selectedPlayerCard}
                selectedSkill={selectedSkill}
                skillSelected={skillSelected}
                returnCardToPlayerDeck={returnCardToPlayerDeck}
                resetSelectedPlayerCard={resetSelectedPlayerCard}
                resetSelectedSkill={resetSelectedSkill}
                playRoundSelected={playRoundSelected}   
            />
            <PlayerDeck
                playerDeck={playerDeck}
                selectedPlayerCard={selectedPlayerCard}
                cardSelectedByPlayer={cardSelectedByPlayer}
            />
        </>
    );
}

export default GamePage;