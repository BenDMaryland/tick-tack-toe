import React, { useState } from 'react'
import Board from './Square'

function PreviousGames({game:{id,winner,loser,board,players}}) {


// These threee functions are needed to take the board state which is a string into somethiong useable. 
// as it stands this is aweful but it mostly works 
/// when i do the equation in here it leaves some charcters in the first and last position, so the first and last function are diffrent. 




function gameStateHandler (i){

if (board.split(",")[i]=="" ) return ("d")

return  board.split(",")[i]

}



if (players == null) return (  <h3  style={{"textAlign":"center"}}  > This game was a tie </h3>)
if (board == null) return (  <h3  style={{"textAlign":"center"}}  > This game was a tie </h3>)

else {
  console.log( board.split(",")  )
    return (
        <div style={{"textAlign":"center"}}  > 
            <p>Game: {id} </p>
            <p>winner:{players.find(elem => elem.id=== winner) ?players.find(elem => elem.id=== winner).player_name : null   } </p>
            <p>loser:{players.find(elem => elem.id=== loser) ?players.find(elem => elem.id=== loser).player_name : null  } </p>



          { gameStateHandler (0) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (0) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  /> } 
          <h4 style={{"display": "inline" }}> |</h4>
           {gameStateHandler (1)  ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (1)  ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
           <h4 style={{"display": "inline" }}> |</h4>
          {gameStateHandler (2)  ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (2)  ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
          <br/>
          <h4 style={{"display": "inline" }}> _____________</h4>
          <br style={{"lineHeight":"0px"}} />
           {gameStateHandler (3) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (3 ) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />  } 
           <h4 style={{"display": "inline" }}> |</h4>
           {gameStateHandler (4) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (4) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> :<img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
           <h4 style={{"display": "inline" }}> |</h4>
           {gameStateHandler (5) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (5) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />  } 
            <br style={{"lineHeight":"80px"}} />
            <h4 style={{"lineHeight":"80px"}} style={{"display": "inline" }}> _____________</h4>
          <br/>
            {gameStateHandler (6) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (6) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
            <h4 style={{"display": "inline" }}> |</h4>
           {gameStateHandler (7) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (7) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
           <h4 style={{"display": "inline" }}> |</h4>
           { gameStateHandler (8) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : gameStateHandler (8) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   }  
           <br/>



<p  style={{"display": "inline" }} > { gameStateHandler (0) } </p>
<h4 style={{"display": "inline" }}> |</h4>
           <p  style={{"display": "inline" }} > {gameStateHandler (1)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p  style={{"display": "inline" }} > {gameStateHandler (2)}  </p>   
           <br/>
          <h4 style={{"display": "inline" }}> __________</h4>
          <br style={{"lineHeight":"0px"}} />
           <p style={{"display": "inline" }}> {gameStateHandler (3)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={   {"display": "inline" }}> {gameStateHandler (4)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={   {"display": "inline" }}>  {gameStateHandler (5)} </p>
           <br/>
          <h4 style={{"display": "inline" }}> __________</h4>
          <br style={{"lineHeight":"0px"}} />
           <p style={{"display": "inline" }}> {gameStateHandler (6)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={{"display": "inline" }}>     {gameStateHandler (7)}    </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={{"display": "inline" }}>    {gameStateHandler (8)} </p>
           <br/>
           <br/>
        </div>
    )
}}

export default PreviousGames


// ["X", "O", "", "O", "X", "", "", "", "X"]