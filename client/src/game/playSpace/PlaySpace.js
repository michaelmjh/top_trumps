import AiCard from './AiCard';
import Controls from './Controls';
import PlayerCard from './PlayerCard';

function PlaySpace({playerTurn, selectedPlayerCard, selectedSkill, skillSelected, returnCardToPlayerDeck, resetSelectedPlayerCard, resetSelectedSkill, playRoundSelected}) {

    return (
        <>
            <p>Score</p>
            <ul>
                <li>
                    {selectedPlayerCard? <PlayerCard
                        playerTurn={playerTurn}
                        selectedPlayerCard={selectedPlayerCard}
                        skillSelected={skillSelected}
                        returnCardToPlayerDeck={returnCardToPlayerDeck}
                        resetSelectedPlayerCard={resetSelectedPlayerCard}
                        resetSelectedSkill={resetSelectedSkill}
                    />
                    :
                    <p>placeholder image</p>
                    }
                </li>
                <li>
                    <Controls
                        playerTurn={playerTurn}
                        selectedPlayerCard={selectedPlayerCard}
                        selectedSkill={selectedSkill}
                        playRoundSelected={playRoundSelected}
                    />
                </li>
                <li>
                    <AiCard 
                    />
                </li>
            </ul>
        </>
    );
}

export default PlaySpace;