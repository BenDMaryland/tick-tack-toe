import '../styles.css';

const DisplayWinners = ({selectedPlayer1,selectedPlayer2,}) => {
    return (
        <div className="winners">
           <h2>{`Player 1 (X): ${selectedPlayer1.player_name }`}</h2>
            <h2>{`Player 2 (O): ${selectedPlayer2.player_name }`}</h2>
        </div>
    )
}

export default DisplayWinners