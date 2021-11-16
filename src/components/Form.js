import '../styles.css';
import {useState} from 'react'

const Form = () => {

    const [playerData, setPlayerData] = useState({
        playerWins: 0,
        playerLosses: 0,
        playerName: '',
        playerAvatar: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const newPlayer = {
            playerWins: playerData.playerWins,
            playerLosses: playerData.playerLosses,
            playerName: playerData.playerName,
            playerAvatar: playerData.playerAvatar,
        }

        fetch('http://localhost:9292/players', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(newPlayer)
        })
        .then(response => response.json())
        .then(newPlayer)
    }

    const handleChange = (e) => {
            setPlayerData({
                [e.target.name] : e.target.value,
            })
    }
    
    return (
        <div className="form">
            <form className = 'form' onSubmit={handleSubmit}>
            <h2>Player 1</h2> 
                <input name='name' placeholder='Full Name' value={playerData.playerName} onChange={handleChange}/>
                <input  name='avatar' placeholder='avatar' value={playerData.playerAvatar} onChange={handleChange}/>
                <input type='submit' className='submit' />
            </form>

            <form className = 'form' onSubmit={handleSubmit}>
            <h2>Player 2</h2> 
                <input  placeholder='Full Name' value={playerData.playerName} onChange={handleChange}/>
                <input  placeholder='avatar' value={playerData.playerAvatar} onChange={handleChange}/>
                <input type='submit' className='submitTwo'/>
            </form>
        </div>
    )
}

export default Form
