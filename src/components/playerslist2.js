import React from 'react'

function PlayersList2({ selected2, playerTwoSelectionHandler, player, player: { player_name, player_avatar} }) {


    return (
        <div  style={{"border":"solid"}}           >
         <img   style={{"width": "150px"}} src={player_avatar}></img>   
         <h4>{player_name}</h4>
         {selected2 ? null : <button onClick={()=>playerTwoSelectionHandler(player)}   >Pick player</button>}
 
        </div>
    )
}
 
export default PlayersList2
