import React from 'react'

function Playerslist2({playerTwoSelectionHandler,player,player:{id,player_name,player_wins,player_losses,player_avatar}}) {


    return (
        <div  style={{"border":"solid"}}           >
         <img   style={{"width": "150px"}} src={player_avatar}></img>   
         <h4>{player_name}</h4>
    <button onClick={()=>playerTwoSelectionHandler(player)}   >Pick player 2</button>
 
        </div>
    )
}
    


export default Playerslist2
