import './styles.css';
import {useEffect, useState} from 'react'
import Board from './components/Board'
import Form from './components/Form'
import {NavLink, Route, Routes} from 'react-router-dom'
import PlayerInfo from "./components/PlayerInfo"
 import PlayersList1 from './components/PlayersList1';
import PlayersList2 from './components/playerslist2';

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [selected1, setselected1] = useState(false)
  const [selected2, setselected2] = useState(false)
  const [allPlayers, setallPlayers] = useState([])
  const [currentGameInstance, setcurrentGameInstance] = useState()
const [domUpdate, setdomUpdate] = useState(0)

const [selectedPlayer1, setselectedPlayer1] = useState({
player_name: "",
player_avatar:""



})
const [selectedPlayer2, setselectedPlayer2] = useState({
  player_name: ""
  
  
  
  
  })

function domupdateHandler(){

  setdomUpdate((domUpdate)=>domUpdate+1)
console.log("it ran ")

}
console.log(domUpdate)






/// This use effect grabs all the players 
//// CURRENT ISSUE WHEN A NEW PLAYER IS MADE DOM DOESN NOT UPDATE 
///// ONCE PLAYES IS MADE ITS PUT IN USESATE ALLPLAYERS
  useEffect(() => {
    fetch ("http://localhost:9292/players")
   .then(r=>r.json())
   .then (data=> setallPlayers(data))
   
   }, [selected1])
   

function playerOneSelectionHandler(player){
    // setselectedPlayer1(player)
    //player ons is x
    setselectedPlayer1({...player, ["x"]: "x"} )
    setselected1(true)
}
function playerTwoSelectionHandler(player){
  setselectedPlayer2({...player, ["o"]: "o"})
  setselected2(true)
}




function resetPlayers(){

  setselected1(false)
  setselected2(false)
  setselectedPlayer1({player_name: "", player_avatar:""})
  setselectedPlayer2({player_name: "", player_avatar:""})
  console.log(selected1)
}
console.log(selected1)














useEffect(() => {
if (selected1 ===true &&selected2===true ){
 console.log("ready to start game ")
 console.log("x is ",selectedPlayer1.id)
 console.log("o is ",selectedPlayer2.id)


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
        .then(data=>setcurrentGameInstance(data))
   
}


}, [selected1,domUpdate])

// console.log("player one is :",selectedPlayer1)
// console.log("player two is :",selectedPlayer2)



/////////// DOM ONLY LOADS ONCE ALL PLAYERS ARE LOADED 
////////////

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
{selectedPlayer1.player_name!= "" ? <PlayersList1  selected1={selected1} className={"k"} playerOneSelectionHandler={playerOneSelectionHandler}  player={selectedPlayer1}     />  :allPlayers.map((player)=>  { return (<PlayersList1  selected1={selected1} className={"k"} playerOneSelectionHandler={playerOneSelectionHandler}  player={player} key={player.id}    />  )} )   }
</div>
      <div className="board">
        <NavLink className='links' to='/new'>Create Players</NavLink>
        <NavLink className='links' to='/'>Game board</NavLink>
        <NavLink className='links' to='/playerinfo'>Player Info</NavLink>
        <Routes>

            <Route path="playerinfo" element={allPlayers.map((player)=>  { return (<PlayerInfo player={player} key={player.id}    />  )} )} />
            <Route path="new" element={<Form domupdateHandler={domupdateHandler} playerOneData={playerOneData} setPlayerOneData={setPlayerOneData} playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData}/> } /> 
            <Route path="/" element={<Board resetPlayers={resetPlayers} position={board} setValue={setBoard} currentGameInstance={currentGameInstance}  selectedPlayer2={selectedPlayer2} playerOneData={playerOneData}  selectedPlayer1={selectedPlayer1}   setPlayerOneData={setPlayerOneData} playerTwoData={playerTwoData} setPlayerTwoData={setPlayerTwoData}/>}/>  

        </Routes>
      </div>
      <div   classname="playerlist">
{   selectedPlayer2.player_name!= "" ? <PlayersList2  selected2={selected2} className={"k"} playerTwoSelectionHandler={playerTwoSelectionHandler}  player={selectedPlayer2}     />   :allPlayers.map((player)=>  { return (<PlayersList2 className={"playerlist"} playerTwoSelectionHandler={playerTwoSelectionHandler}  player={player} key={player.id}    />  )} )}
</div>
    </div>
  )
}

export default App;
