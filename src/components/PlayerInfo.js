import React from 'react'
import '../styles.css';
function PlayerInfo({player:{id,player_name,player_wins,player_losses,player_avatar}}) {

console.log(id)


    return (
        <div id="playerinfo"  style={{"display":"inline-block"}} style={{"border":"solid"}}              >
         <img style={{"display":"inline-block"}}  style={{"width": "150px"}} src={player_avatar}></img>   
         <h4>{player_name}</h4>
         <p>Loses: {player_losses}</p>
         <br />
         <p>wins: {player_wins}</p>
   

        </div>
    )
}

export default PlayerInfo


// {
//     "player": {
//         "id": 7,
//         "player_name": null,
//         "player_wins": 0,
//         "player_losses": 0,
//         "player_avatar": null,
//         "created_at": "2021-11-16T21:15:31.682Z",
//         "updated_at": "2021-11-16T21:15:31.682Z"
//     }
// }


// // .card {
//   /* Add shadows to create the "card" effect */
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
// }

// /* On mouse-over, add a deeper shadow */
// .card:hover {
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }

// /* Add some padding inside the card container */
// .container {
//   padding: 2px 16px;
// }