import '../styles.css';

const Board = ({val, chooseSquare}) => {
    return (
        <div className="square" onClick={chooseSquare}>
           {val}
        </div>
    )
}

export default Board