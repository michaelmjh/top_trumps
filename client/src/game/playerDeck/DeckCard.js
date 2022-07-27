function DeckCard({card, selectedPlayerCard, cardSelectedByPlayer}) {
 
    const showSkills = card.skills.map((skill, index) => {
        return (
            <p key={index}>{Object.keys(skill)}: {skill[Object.keys(skill)]}</p>
        )
    })

    const handleCardClick = () => {
        cardSelectedByPlayer(card)
    }

    return (
        <>
            {selectedPlayerCard ?
                    <>
                        <p>Name: {card.name}</p>
                        <img src={card.sprite} alt={card.name} height={50}></img>
                        {showSkills}
                    </>
                :    
                    <a onClick={handleCardClick}>
                        <p>Name: {card.name}</p>
                        <img src={card.sprite} alt={card.name} height={50}></img>
                        {showSkills}
                    </a>  
            }
        </>
    );
}

export default DeckCard;