import React, { useState } from 'react'
import Board from './Square'

function PreviousGames({game:{id,winner,loser,board,players}}) {
 const [boardArray, setboardArray] = useState([])
console.log( board.replace(/"/g,"").split(",")[8] ) 
console.log(board)



    return (
        <div  > 
            <p>games: {id} </p>
            <p>winner:{players.find(elem => elem.id=== winner) ?players.find(elem => elem.id=== winner).player_name : null  } </p>
            <p>loser:{players.find(elem => elem.id=== loser) ?players.find(elem => elem.id=== loser).player_name : null  } </p>
           <p  style={{"display": "inline" }} >            {board.replace("[","").replace(/"/g,"").split(",")[0].length == 0?  "k" : board.replace(/"/g,"").split(",")[0].charAt(1)   }  </p>
           <p  style={{"display": "inline" }} >             {board.replace(/"/g,"").split(",")[1]== " "?  "k" : board.replace(/"/g,"").split(",")[1]   }                 </p>
           <p  style={{"display": "inline" }} >              {board.replace(/"/g,"").split(",")[2]== " "?  "k" : board.replace(/"/g,"").split(",")[2]   }    </p>   
          <br/>
           <p style={{"display": "inline" }}>                                                      {board.replace(/"/g,"").split(",")[3]== " "?  "k" : board.replace(/"/g,"").split(",")[3]        } </p>
           <p style={   {"display": "inline" }}>                 {board.replace(/"/g,"").split(",")[4]== " "?  "k" : board.replace(/"/g,"").split(",")[4]              } </p>
           <p style={   {"display": "inline" }}>                        {board.replace(/"/g,"").split(",")[5]== " "?  "k" : board.replace(/"/g,"").split(",")[5]     } </p>
           <br/>
           <p style={{"display": "inline" }}>                                        {board.replace(/"/g,"").split(",")[6]== " "?  "k" : board.replace(/"/g,"").split(",")[6]   } </p>
           <p style={{"display": "inline" }}>                      {board.replace(/"/g,"").split(",")[7]== " "?  "k" : board.replace(/"/g,"").split(",")[7]      } </p>
           <p style={{"display": "inline" }}>                             {board.replace(/"/g,"").split(",")[8].length ==2 ?  "k" : board.replace(/"/g,"").split(",")[8].charAt(1)   } </p>
        </div>
    )
}

export default PreviousGames


// ["X", "O", "", "O", "X", "", "", "", "X"]