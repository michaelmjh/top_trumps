function PlayerCard({playerTurn, selectedPlayerCard, skillSelected, returnCardToPlayerDeck, resetSelectedPlayerCard, resetSelectedSkill}) {

    const handleSkillSelect = (skill) => {
        skillSelected(skill[0]);
    }

    const showSkills = selectedPlayerCard.skills.map((skill, index) => {
        if (playerTurn){
            return (
                <button onClick={() => handleSkillSelect(Object.keys(skill))} key={index}>{Object.keys(skill)}: {skill[Object.keys(skill)]}</button>         
            )
        } else {
            return (
                <p key={index}>{Object.keys(skill)}: {skill[Object.keys(skill)]}</p>         
            )
        }
    })

    const handleReturnCardToDeckClicked = () => {
        returnCardToPlayerDeck(selectedPlayerCard);
        resetSelectedPlayerCard();
        if (playerTurn){
            resetSelectedSkill();
        }
    }

    return (
        <>
                <p>Name: {selectedPlayerCard.name}</p>
                <img src={selectedPlayerCard.sprite} alt={selectedPlayerCard.name} height={50}></img>
                {showSkills}
                <button onClick={handleReturnCardToDeckClicked}>Return to Deck</button>
        </>
    );
}

export default PlayerCard;