import './styles.css';
import {useState} from 'react'
import Board from './components/Board'

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  
  return (<div className="app">
    <div className='board'>
      <Board position={board} setValue={setBoard}/>
    </div>
  </div>
  )
}

export default App;
