function Controls({playerTurn, selectedPlayerCard, selectedSkill, playRoundSelected}) {

    const showInstructions = () => {
        if (selectedPlayerCard && selectedSkill){
            return (
                <p>Selected Skill: {selectedSkill}</p>
            )
        } else if (selectedPlayerCard && playerTurn) {
            return (
                <p>Select a Skill</p>
            )
        } else if (selectedPlayerCard && !playerTurn){
            return (
                <p>Ai Skill selected</p>
            )
        } else {
            return (
                <p>Select a Card</p>
            )
        }
    }

    const showPlayButton = () => {
        if (selectedPlayerCard && selectedSkill){
            return (
                <button onClick={playRoundClicked}>Play Round</button>
            )
        }
    }

    const playRoundClicked = () => {
        playRoundSelected();
    }

    return (
        <>
            {showInstructions()}
            {showPlayButton()}
        </>
    );
}

export default Controls;