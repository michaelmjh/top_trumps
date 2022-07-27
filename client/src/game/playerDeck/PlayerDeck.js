import DeckCard from "./DeckCard";
import './PlayerDeck.css'

function PlayerDeck({playerToStart, playerDeck, selectedPlayerCard, cardSelectedByPlayer}) {

    const cardsList = playerDeck.map((card, index) => {
        return (
            <>
                <li>
                    <DeckCard 
                        key={index}
                        card={card}
                        playertoStart={playerToStart} 
                        selectedPlayerCard={selectedPlayerCard}
                        cardSelectedByPlayer={cardSelectedByPlayer}
                    />
                </li>
                
            </>
        )
    });

    return (
        <>
            <h1>Player Deck</h1>
            <ul>
                {cardsList}
            </ul>
        </>
    );
}

export default PlayerDeck;