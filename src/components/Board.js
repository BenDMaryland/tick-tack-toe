import '../styles.css';
import Square from './Square'
import {useState, useEffect} from 'react'
import {patterns} from '../patterns'
import DisplayWinners from './DisplayWinners';


const Board = ({position, setValue, playerOneData, setPlayerOneData, playerTwoData, setPlayerTwoData}) => {
    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({winner:"" ,gameOver: "none"})
    // const [playerOneWins, setPlayerOneWins] = useState(0)
    // const [playerTwoWins, setPlayerTwoWins] = useState(0)

    useEffect(() => {
        checkTie()
        checkWin()
        if(player === 'O') setPlayer('X')
        else setPlayer('O')
    }, [position]);

    useEffect(() => {
        if(result.gameOver != 'none') {
            alert("You've won!")
            // <WinScreen />
            // console.log('hi')
        } 
    }, [result])
    
    const chooseSquare = (square) => {
        setValue(position.map((val, idx) => {
            if(idx === square && val === "") return player
            return val
        }))
    }

    const handleAddWins = () => {
        console.log(playerOneData.id)
        fetch(`http://localhost:9292/players/${playerOneData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                playerWins: playerOneData.playerWins,
                playerLosses: playerOneData.playerLosses
            })
        })
        .then(r => r.json)
        .then(updatedPoints => setPlayerOneData(updatedPoints))
    }
    const handleAddWinsTwo = () => {
        fetch(`http://localhost:9292/players/${playerTwoData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                playerWins: playerTwoData.playerWins,
                playerLosses: playerTwoData.playerLosses
            })
        })
        .then(r => r.json)
        .then(updatedPoints => setPlayerTwoData(updatedPoints))
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

//  function postHanlder ()[
//     fetch("http://localhost:9292/",
//     {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({
//             x: id of player x, 
//             o: id of player o,
//             winner: if of who won,
//             loser: id of who lost,
//         })
//     })
//     .then(function(res){ console.log(res) })
//     .catch(function(res){ console.log(res) })
//  ]




    const restartGame = () => {
        setValue(["","","","","","","","",""])
        setPlayer("X")
    }
    return (
        <>
            <DisplayWinners dataOne={playerOneData} dataTwo={playerTwoData}/> 
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