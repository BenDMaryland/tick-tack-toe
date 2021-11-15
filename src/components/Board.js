import '../styles.css';
import Square from './Square'
import {useState, useEffect} from 'react'
import {patterns} from '../patterns'

const Board = ({position, setValue}) => {
    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({winner:"" ,gameOver: "none"})

    useEffect(() => {
        checkWin()
        checkTie()
        if(player == 'O') setPlayer('X')
        else setPlayer('O')
    }, [position])

    useEffect(() => {
        if(result.gameOver != 'none')
        alert(`Game finished, winner: ${result.winner}`)
    }, [result])
    
    const chooseSquare = (square) => {
        setValue(position.map((val, idx) => {
            if(idx == square && val == "") return player
            return val
        }))
    }

    const checkWin = () => {
        patterns.forEach((currentPattern) => {
            const firstPlayer = position[currentPattern[0]];
            if(firstPlayer === '') return
            let foundWinningPattern = true
            currentPattern.forEach((idx) => {
                if(position[idx] != firstPlayer) foundWinningPattern = false     
            })

            if(foundWinningPattern) {
                setResult({winner: player, gameOver: 'Won'})
            }
        })
    }

    const checkTie = () => {
        let filled = true;
        position.forEach((square) => {
            if(square == "") {
                filled = false
            }
        })
        if(filled) setResult({winner: "No one", state: "Tie"})
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