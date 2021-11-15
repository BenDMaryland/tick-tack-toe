import '../styles.css';

const DisplayWinners = ({playerOnePoints, playerTwoPoints}) => {
    
    return (
        <div className="winners">
           <h2>{`Winner 1: ${playerOnePoints}`}</h2>
            <h2>{`Winner 2: ${playerTwoPoints}`}</h2>
        </div>
    )
}

export default DisplayWinners