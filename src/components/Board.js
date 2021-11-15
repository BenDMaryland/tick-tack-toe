import '../styles.css';
import Square from './Square'
import {useState} from 'react'

const Board = ({position, setValue}) => {
    const  [player, setPlayer] = useState("X");

    const chooseSquare = (square) => {
        setValue(position.map((val, idx) => {
            if(idx == square && val == "") return player
            return val
            
        }))
        {player == "X" ? setPlayer("O"): setPlayer("X")}
    }

    return (
        <>
            <div className="row">
                <Square val={position[0]} chooseSquare={() => chooseSquare(0)}/>
                <Square val={position[1]} chooseSquare={() => chooseSquare(1)}/>
                <Square val={position[2]} chooseSquare={() => chooseSquare(2)}/>
            </div>
            <div className="row">
                <Square val={position[3]} chooseSquare={() => chooseSquare(3)}/>
                <Square val={position[4]} chooseSquare={() => chooseSquare(4)}/>
                <Square val={position[5]} chooseSquare={() => chooseSquare(5)}/>
            </div>
            <div className="row">
                <Square val={position[6]} chooseSquare={() => chooseSquare(6)}/>
                <Square val={position[7]} chooseSquare={() => chooseSquare(7)}/>
                <Square val={position[8]} chooseSquare={() => chooseSquare(8)}/>
            </div>
        </>
    )
}

export default Board