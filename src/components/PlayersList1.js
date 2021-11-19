import '../styles.css';
function PlayersList1({selected1, playerOneSelectionHandler, player, player: {player_name, player_avatar} }) {
    return (
        <div  style={{"border":"solid"}}>
            <img   style={{"width": "150px"}} src={player_avatar} id="img1"></img>   
            <h4 id="name2">{player_name}</h4>
                {selected1 ? null : <button onClick={()=>playerOneSelectionHandler(player)} id="pick1">Pick player</button>}
        </div>
    )
}

export default PlayersList1
