import React from 'react'
import '../styles.css';
function PlayersList({player:{id,player_name,player_wins,player_losses,player_avatar}}) {


    return (
        <div  style={{"border":"solid"}}              >
         <img   style={{"width": "150px"}} src={player_avatar}></img>   
         <h4>{player_name}</h4>
         <p>Loses: {player_losses}</p>
         <br />
         <p>wins: {player_wins}</p>
   
        <br/>
        </div>
    )
}
    


export default PlayersList
