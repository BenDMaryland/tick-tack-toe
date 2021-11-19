import '../styles.css';
import Square from './Square'
import {useState, useEffect} from 'react'
import {patterns} from '../patterns'
import DisplayWinners from './DisplayWinners';
import WinModal from './WinModal';


const Board = ({resetPlayers,currentGameInstance,selectedPlayer1,selectedPlayer2, position, setValue, playerOneData, setPlayerOneData, playerTwoData, setPlayerTwoData}) => {

    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({winner:"" ,gameOver: "none"})
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        checkTie()
        checkWin()
        if(player === 'O') setPlayer('X')
        else setPlayer('O')
    }, [position]);

    useEffect(() => {
        if(result.winner != '') setModalOpen(true)
        
        }, [result])
    
    const chooseSquare = (square) => {    
        console.log()
        if (position[square]== "" )  {  
            if (selectedPlayer1.player_name === "" || selectedPlayer2.player_name === ""){ alert ("please pick player")
}           else {
                    setValue(position.map((val, idx) => {
                     if(idx === square && val === "") return player
                     return val
        })) }}   
else {}}

    const handleAddWins = () => {
   
        fetch(`http://localhost:9292/game_instances/${currentGameInstance.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                winner: selectedPlayer1.id,
                loser:selectedPlayer2.id,
                board:position
            })
        })
        .then(r => r.json)
    }
    const handleAddWinsTwo = () => {
        fetch(`http://localhost:9292/game_instances/${currentGameInstance.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                winner: selectedPlayer2.id,
                loser:selectedPlayer1.id,
                board:position
            })
        })
        .then(r => r.json)
    }

    const checkWin = () => {
        patterns.forEach((currentPattern) => {
            const firstPlayer = position[currentPattern[0]];
            if(firstPlayer === '') return
            let foundWinningPattern = true
            currentPattern.forEach((idx) => {
                if(position[idx] !== firstPlayer) foundWinningPattern = false     
            })

            if(foundWinningPattern) {
                if(player === 'X') {
                    handleAddWins()
                  
                } else if(player === "O") {

                    handleAddWinsTwo()

                }
                setResult({winner: player, gameOver: 'Won'})
                restartGame();
            }
        })
    }

    const checkTie = () => {
        let filled = true;
        position.forEach((square) => {
            if(square === "") {
                filled = false
            }
        })
        if(filled) {
            setResult({winner: "No one", state: "Tie"})
            restartGame()
        }
    }

    const restartGame = () => {
        setValue(["","","","","","","","",""])
        setPlayer("X")
        resetPlayers()
    }
    return (
        <>
            {modalOpen === true? <WinModal setModal={setModalOpen} result={player}/> : null}
            <DisplayWinners  selectedPlayer2={selectedPlayer2} selectedPlayer1={selectedPlayer1} dataOne={playerOneData} dataTwo={playerTwoData}/> 
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