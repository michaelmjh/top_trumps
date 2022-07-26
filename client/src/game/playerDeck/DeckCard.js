function DeckCard({card, cardSelectedByPlayer}) {

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
            <a onClick={handleCardClick}>
                <p>Name: {card.name}</p>
                <img src={card.sprite} alt={card.name} height={50}></img>
                {showSkills}
                <button></button>
            </a>
        </>
    );
}

export default DeckCard;