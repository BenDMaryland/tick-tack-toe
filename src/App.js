import './styles.css';
import {useState} from 'react'
import Board from './components/Board'
import Form from './components/Form'
import {NavLink, Route, Routes} from 'react-router-dom'

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [playerOneData, setPlayerOneData] = useState({
    playerWins: 0,
    playerLosses: 0,
    playerName: '',
    playerAvatar: '',
})
const [playerTwoData, setPlayerTwoData] = useState({
    playerWins: 0,
    playerLosses: 0,
    playerName: '',
    playerAvatar: '',
})

  return (
    <div className='app'>
      <div className="board">
        <NavLink className='links' to='/new'>Create Players</NavLink>
        <NavLink className='links' to='/'>Game board</NavLink>
        <Routes>
            <Route path="new" element={<Form playerOneData={playerOneData} setPlayerOneData={setPlayerOneData} playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData}/> } /> 
            <Route path="/" element={<Board position={board} setValue={setBoard} playerOneData={playerOneData} setPlayerOneData={setPlayerOneData} playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData}/>}/>  
        </Routes>
      </div>
    </div>
  )
}

export default App;
