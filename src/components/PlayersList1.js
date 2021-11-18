import '../styles.css';
function PlayersList1({selected1, playerOneSelectionHandler, player, player: {player_name, player_avatar} }) {
    return (
        <div  style={{"border":"solid"}}>
            <img   style={{"width": "150px"}} src={player_avatar}></img>   
            <h4>{player_name}</h4>
                {selected1 ? null : <button onClick={()=>playerOneSelectionHandler(player)}>Pick player</button>}
        </div>
    )
}

export default PlayersList1
