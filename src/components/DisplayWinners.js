import '../styles.css';

const DisplayWinners = ({selectedPlayer1,selectedPlayer2,dataOne, dataTwo}) => {

console.log(selectedPlayer1.player_name)

    return (
        <div className="winners">
           <h2>{`Player 1: ${selectedPlayer1.player_name }`}</h2>
            <h2>{`Player  2: ${selectedPlayer2.player_name }`}</h2>
        </div>
    )
}

export default DisplayWinners