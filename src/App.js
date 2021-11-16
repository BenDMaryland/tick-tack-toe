import './styles.css';
import {useState} from 'react'
import Board from './components/Board'
import Form from './components/Form'
import {NavLink, Route, Routes} from 'react-router-dom'

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  
  return (
    <div className='app'>
      <div className="board">
        <NavLink className='links' to='/new'>Create Players</NavLink>
        <NavLink className='links' to='/'>Board Screen</NavLink>
      <Routes>
            <Route path="new" element={<Form /> } /> 
            <Route path="/" element={<Board position={board} setValue={setBoard}/>}/>  
        </Routes>
      </div>
    </div>
  )
}

export default App;
