import './styles.css';
import {useEffect, useState} from 'react'
import Board from './components/Board'
import Form from './components/Form'
import {NavLink, Route, Routes} from 'react-router-dom'
import PlayerInfo from "./components/PlayerInfo"
 import PlayersList from './components/PlayersList';


function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [allPlayers, setallPlayers] = useState([])



  useEffect(() => {
    fetch ("http://localhost:9292/players")
   .then(r=>r.json())
   .then (data=> setallPlayers(data))
   
   }, [allPlayers.length])
   
   
   
   
   










if (!allPlayers) return <h1>Loading</h1>
  return (
    <div className='app'>
      
<div   classname="playerlist">
{allPlayers.map((player)=>  { return (<PlayersList classname={"playerlist"}  player={player} key={player.id}    />  )} )}
</div>
      <div className="board">
        <NavLink className='links' to='/new'>Create Players</NavLink>
        <NavLink className='links' to='/'>Game board</NavLink>
        <NavLink className='links' to='/playerinfo'>Player Info</NavLink>
        <Routes>
            <Route path="new" element={<Form /> } /> 
            <Route path="playerinfo" element={allPlayers.map((player)=>  { return (<PlayerInfo player={player} key={player.id}    />  )} )} />
            <Route path="/" element={<Board position={board} setValue={setBoard}/>}/>  
          
        </Routes>
      </div>
    </div>
  )
}

export default App;
