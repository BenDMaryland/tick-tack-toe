import '../modal.css';

const WinModal = ({setModal, result}) => {
    console.log(result)
    return (
        
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                
                </div>
                <div className="title">
                <h1>Game Over!</h1>
                </div>
                <div className="body">
                    {`Winner is: ${result}`}
                </div>
                <div className="footer">
                <button
                    onClick={() => {
                    setModal(false);
                    }}
                    id="cancelBtn"
                >
                    Play again!
                </button>
            </div>
        </div>
    </div>
    
    )
}

export default WinModal