import React, { useState } from 'react'
import Board from './Square'

function PreviousGames({game:{id,winner,loser,board,players}}) {



// These threee functions are needed to take the board state which is a string into somethiong useable. 
// as it stands this is aweful but it mostly works 
/// when i do the equation in here it leaves some charcters in the first and last position, so the first and last function are diffrent. 

function value1(board){
   return  board.replace("[","").replace(/"/g,"").split(",")[0].length == 0?  "k" :board.replace(/"/g,"").split(",")[0].charAt(1)}

function value27(board,i){
return board.replace(/"/g,"").split(",")[i]== " "?  "k" : board.replace(/"/g,"").split(",")[i].charAt(1) }

function value8(board){
return board.replace(/"/g,"").split(",")[8].length ==2 ?  "k" : board.replace(/"/g,"").split(",")[8].charAt(1) }



if (board == null) return (  <h3  style={{"textAlign":"center"}}  > This game was a tie </h3>)
else {
    return (
        <div style={{"textAlign":"center"}}  > 
            <p>Game: {id} </p>
            <p>winner:{players.find(elem => elem.id=== winner) ?players.find(elem => elem.id=== winner).player_name : null   } </p>
            <p>loser:{players.find(elem => elem.id=== loser) ?players.find(elem => elem.id=== loser).player_name : null  } </p>


{/* This attempts to make the squares the players avatars instead of the Xes or Os */}
            {/* { value1(board) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value1(board) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  /> } 
          <h4 style={{"display": "inline" }}> |</h4>
           {value27(board,1) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,1) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
           <h4 style={{"display": "inline" }}> |</h4>
          {value27(board,2) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,2) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
          <br/>
          <h4 style={{"display": "inline" }}> _____________</h4>
          <br style={{"lineHeight":"0px"}} />
           {value27(board,3) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,3) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />  } 
           <h4 style={{"display": "inline" }}> |</h4>
           {value27(board,4) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,4) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> :<img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
           <h4 style={{"display": "inline" }}> |</h4>
           {value27(board,5) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,5) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />  } 
            <br style={{"lineHeight":"80px"}} />
            <h4 style={{"lineHeight":"80px"}} style={{"display": "inline" }}> _____________</h4>
          <br/>
            {value27(board,6) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,7) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
            <h4 style={{"display": "inline" }}> |</h4>
           {value27(board,7) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value27(board,7) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   } 
           <h4 style={{"display": "inline" }}> |</h4>
           { value8(board) ==="X"? <img  src={players[0].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}  /> : value8(board) ==="O" ? <img  src={players[1].player_avatar } style={{"height":"20px" }}   style={{"width":"20px" }}    /> : <img  src="https://static.wikia.nocookie.net/dragon-lawl-z/images/4/47/Blank_Man.jpg/revision/latest?cb=20151105201715" style={{"height":"20px" }} style={{"width":"20px" }}  />   }  
           <br/> */}


 {/* Here is where we display the xes or os  */}


<p  style={{"display": "inline" }} > { value1(board) } </p>
<h4 style={{"display": "inline" }}> |</h4>
           <p  style={{"display": "inline" }} > {value27(board,1)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p  style={{"display": "inline" }} > {value27(board,2)}  </p>   
           <br/>
          <h4 style={{"display": "inline" }}> __________</h4>
          <br style={{"lineHeight":"0px"}} />
           <p style={{"display": "inline" }}>{value27(board,3)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={   {"display": "inline" }}>{value27(board,4)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={   {"display": "inline" }}>  {value27(board,5)} </p>
           <br/>
          <h4 style={{"display": "inline" }}> __________</h4>
          <br style={{"lineHeight":"0px"}} />
           <p style={{"display": "inline" }}> {value27(board,6)} </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={{"display": "inline" }}>     {value27(board,7)}    </p>
           <h4 style={{"display": "inline" }}> |</h4>
           <p style={{"display": "inline" }}>    {value8(board)} </p>
           <br/>
           <br/>
        </div>
    )
}}

export default PreviousGames


// ["X", "O", "", "O", "X", "", "", "", "X"]