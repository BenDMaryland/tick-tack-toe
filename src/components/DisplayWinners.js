import '../styles.css';

const DisplayWinners = ({dataOne, dataTwo}) => {
    return (
        <div className="winners">
           <h2>{`Winner 1: ${dataOne.playerWins}`}</h2>
            <h2>{`Winner 2: ${dataTwo.playerWins}`}</h2>
        </div>
    )
}

export default DisplayWinners