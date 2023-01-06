import memeFace from '../icon/Trollface.png';

export default function Header() {
    return (
        <header className="App-header">
            <div className="header-title">
                <img src={memeFace} className="meme-icon" alt="meme-icon" />
                <p className="meme-text">Meme Generator</p>
            </div>
            <h5 className="header-text">React Course-Project 3</h5>
        </header>
    )
}