import React from 'react'
import '../styles.css';
import ParticlesBG from '../ParticlesBG';

function PlayerInfo({player:{id,player_name,player_wins,player_losses,player_avatar}}) {

    return (
        <div       >
        <div id="playerisnfo"   style={{"border":"solid"}}              >
        <h4   style={{"textAlign":"center"}} >{player_name}  </h4>
         <img  id ="playerinfoimage" style={{"width": "50%"}} style={{"marginLeft":"auto"}}style={{"marginRight":"auto"}}   style={{"width": "150px"}} src={player_avatar}></img>   
        
         <p style={{"textAlign":"center"}} > Wins: {player_wins} </p>
         <p style={{"textAlign":"center"}} > Loses: {player_losses} </p>
        </div>
        
        </div>
        
    )
}

export default PlayerInfo