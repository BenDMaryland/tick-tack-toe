import React from 'react'
import '../styles.css';
import ParticlesBG from '../ParticlesBG';

function PlayerInfo({player:{id,player_name,player_wins,player_losses,player_avatar}}) {

    return (

        <div className="winLossDisplay">
         <img style={{"display":"inline-block"}}  style={{"width": "150px"}} src={player_avatar}></img>   
         <h4></h4>
         <p> {`${player_name}: `} {`Losses: ${player_losses}`} {`Wins:   ${player_wins}`} </p>
         <p></p>

        </div>
        
    )
}

export default PlayerInfo