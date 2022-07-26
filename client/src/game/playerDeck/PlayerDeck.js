import DeckCard from "./DeckCard";
import './PlayerDeck.css'

function PlayerDeck({playerDeck, cardSelectedByPlayer}) {

    const cardsList = playerDeck.map((card, index) => {
        return (
            <>
                <li>
                    <DeckCard 
                        card={card} 
                        key={index} 
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