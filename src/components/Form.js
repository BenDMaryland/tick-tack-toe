import '../styles.css';

const Form = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="form">
            <form className = 'form'>
            <h2>Player 1</h2> 

                <input  placeholder='Full Name' />
                <input  placeholder='avatar' />
                <input  placeholder='title' />
                <input type='submit' className='submit' onSubmit={handleSubmit}/>
            </form>
            <form className = 'form'>
            <h2>Player 2</h2> 

                <input  placeholder='Full Name' />
                <input  placeholder='avatar' />
                <input  placeholder='title' />
                <input type='submit' className='submitTwo' onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}

export default Form
