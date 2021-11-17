import './styles.css';
import {useEffect, useState} from 'react'
import Board from './components/Board'
import Form from './components/Form'
import {NavLink, Route, Routes} from 'react-router-dom'
import PlayerInfo from "./components/PlayerInfo"
 import PlayersList1 from './components/PlayersList1';
import Playerslist2 from './components/playerslist2';

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [allPlayers, setallPlayers] = useState([])
const [selectedPlayer1, setselectedPlayer1] = useState()
const [selectedPlayer2, setselectedPlayer2] = useState()









/// This use effect grabs all the players 
//// CURRENT ISSUE WHEN A NEW PLAYER IS MADE DOM DOESN NOT UPDATE 
///// ONCE PLAYES IS MADE ITS PUT IN USESATE ALLPLAYERS
  useEffect(() => {
    fetch ("http://localhost:9292/players")
   .then(r=>r.json())
   .then (data=> setallPlayers(data))
   
   }, [allPlayers.length])
   

function playerOneSelectionHandler(player){
    // setselectedPlayer1(player)
    //player ons is x
    setselectedPlayer1({...player, ["x"]: "x"} )

}
function playerTwoSelectionHandler(player){
  setselectedPlayer2({...player, ["o"]: "o"})
}





console.log("player one is :",selectedPlayer1)
console.log("player two is :",selectedPlayer2)



/////////// DOM ONLY LOADS ONCE ALL PLAYERS ARE LOADED 
////////////
if (!allPlayers) return <h1>Loading</h1>
  return (
    <div className='app'>
      
<div   classname="playerlist">
{allPlayers.map((player)=>  { return (<PlayersList1 classname={"playerlist"} playerOneSelectionHandler={playerOneSelectionHandler}  player={player} key={player.id}    />  )} )}
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
      <div   classname="playerlist">
{allPlayers.map((player)=>  { return (<Playerslist2 classname={"playerlist"} playerTwoSelectionHandler={playerTwoSelectionHandler}  player={player} key={player.id}    />  )} )}
</div>
    </div>
  )
}

export default App;
