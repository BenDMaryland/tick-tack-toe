import './styles.css';
import {useEffect, useState} from 'react'
import Board from './components/Board'
import Form from './components/Form'
import {NavLink, Route, Routes} from 'react-router-dom'
import PlayerInfo from "./components/PlayerInfo"
 import PlayersList1 from './components/PlayersList1';
import PlayersList2 from './components/playerslist2';
import PreviousGames from './components/PreviousGames';

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [selected1, setselected1] = useState(false)
  const [selected2, setselected2] = useState(false)
  const [allPlayers, setallPlayers] = useState([])
  const [currentGameInstance, setcurrentGameInstance] = useState({})
  const [domUpdate, setdomUpdate] = useState(0)
  const [FetchedGames, setFetchedGames] = useState([])
const [selectedPlayer1, setselectedPlayer1] = useState({
  player_name: "",
  player_avatar:""
})

const [selectedPlayer2, setselectedPlayer2] = useState({player_name: ""})

function domupdateHandler(){
  setdomUpdate((domUpdate)=>domUpdate+1)
}

/// This use effect grabs all the players 
//// CURRENT ISSUE WHEN A NEW PLAYER IS MADE DOM DOESN NOT UPDATE 
///// ONCE PLAYES IS MADE ITS PUT IN USESATE ALLPLAYERS
  useEffect(() => {
    fetch ("http://localhost:9292/players")
   .then(r=>r.json())
   .then (data=> setallPlayers(data))
   
   }, [selected1,domUpdate])
   useEffect(() => {
    fetch ("http://localhost:9292/game_instances")
   .then(r=>r.json())
   .then (data=> setFetchedGames(data))
   
   }, [selected1,domUpdate])


function playerOneSelectionHandler(player){
  if(player.id ===selectedPlayer2.id) {alert ("Please pick another player")}
  else{
    //player ons is x
    setselectedPlayer1({...player, ["x"]: "x"} )
    setselected1(true)
}}
function playerTwoSelectionHandler(player){
  if(player.id ===selectedPlayer1.id) {alert ("Please pick another player")}
  else{
  setselectedPlayer2({...player, ["o"]: "o"})
  setselected2(true)
}}

function resetPlayers(){
  setselected1(false)
  setselected2(false)
  setselectedPlayer1({player_name: "", player_avatar:""})
  setselectedPlayer2({player_name: "", player_avatar:""})
}

useEffect(() => {
  if (selected1 === true && selected2 === true ){
 fetch(`http://localhost:9292/game_instances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                x: selectedPlayer1.id,
                o: selectedPlayer2.id
            })
        })
        .then(r => r.json())
        .then(data => setcurrentGameInstance(data))
}

}, [selected1, selected2 ,domUpdate])

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

if (!allPlayers) return <h1>Loading</h1>
  return (
    <div className='app'>
      
<div   className="playderlist">
  {selectedPlayer1.player_name != ""
  ? <PlayersList1  selected1={selected1} className={"k"} playerOneSelectionHandler={playerOneSelectionHandler}  player={selectedPlayer1}/> 
  : allPlayers.filter(player=> player.id!=selectedPlayer2.id ).map((player) => { return ( <PlayersList1  selected1={selected1} className={"k"} playerOneSelectionHandler={playerOneSelectionHandler}  player={player} key={player.id}/>)})}

</div>
      <div className="board">
        <NavLink className='links' to='/new'>Create Players</NavLink>
        <NavLink className='links' to='/'>Game board</NavLink>
        <NavLink className='links' to='/playerinfo'>Player Info</NavLink>
        <NavLink className='links' to='/previousgames'>Previous Games</NavLink>
        <Routes>
            <Route path="previousgames" element={ FetchedGames.map((game)=>  { return <PreviousGames key={game.id}  game={game}    />  }   )  } />
            <Route path="playerinfo" element={allPlayers.map((player)=>  { return (<PlayerInfo player={player} key={player.id}    />  )} )} />
            <Route path="new" element={<Form domupdateHandler={domupdateHandler} playerOneData={playerOneData} setPlayerOneData={setPlayerOneData} playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData}/> } /> 
            <Route path="/" element={<Board resetPlayers={resetPlayers} position={board} setValue={setBoard} currentGameInstance={currentGameInstance}  selectedPlayer2={selectedPlayer2} playerOneData={playerOneData}  selectedPlayer1={selectedPlayer1}   setPlayerOneData={setPlayerOneData} playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData}/>}/>  

        </Routes>
      </div>
      <div   classname="playerlist">
{   selectedPlayer2.player_name!= "" ? <PlayersList2  selected2={selected2} className={"k"} playerTwoSelectionHandler={playerTwoSelectionHandler}  player={selectedPlayer2}     />   :allPlayers.filter(player=> player.id!=selectedPlayer1.id ).map((player)=>  { return (<PlayersList2 className={"playerlist"} playerTwoSelectionHandler={playerTwoSelectionHandler}  player={player} key={player.id}    />  )} )}
</div>
    </div>
  )
}

export default App;
