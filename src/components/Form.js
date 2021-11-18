import '../styles.css';
import {useState} from 'react'

const Form = ({domupdateHandler,playerOneData, setPlayerOneData, playerTwoData, setPlayerTwoData}) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const newPlayer = {
            playerWins: playerOneData.playerWins,
            playerLosses: playerOneData.playerLosses,
            playerName: playerOneData.playerName,
            playerAvatar: playerOneData.playerAvatar,
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
        .then(domupdateHandler())
    }

    const handleSubmitTwo = (event) => {
        event.preventDefault()

        const newPlayer = {
            playerWins: playerTwoData.playerWins,
            playerLosses: playerTwoData.playerLosses,
            playerName: playerTwoData.playerName,
            playerAvatar: playerTwoData.playerAvatar,
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
        .then(domupdateHandler())
    }

    const handleChange = (e) => {
            setPlayerOneData({
                ...playerOneData,[e.target.name] : e.target.value
            })
    }
    const handleChangeTwo = (e) => {
            setPlayerTwoData({
                ...playerTwoData,[e.target.name] : e.target.value
            })
    }
    
    return (
        <div className="form">
            <form className = 'form' onSubmit={handleSubmit}>
            <h2>Add New Player!</h2> 
                <input name='playerName' placeholder='Full Name' value={playerOneData.playerName} onChange={handleChange}/>
                <input  name='playerAvatar' placeholder='avatar' value={playerOneData.playerAvatar} onChange={handleChange}/>
                <input type='submit' className='submit'/>
            </form>
            <form className = 'formTwo' onSubmit={handleSubmitTwo}>
            <h2>Add New Player!</h2> 
                <input name='playerName' placeholder='Full Name' value={playerTwoData.playerName} onChange={handleChangeTwo}/>
                <input  name='playerAvatar' placeholder='avatar' value={playerTwoData.playerAvatar} onChange={handleChangeTwo}/>
                <input type='submit' className='submitTwo'/>
            </form>
        </div>
    )
}

export default Form
