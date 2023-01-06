import memesData from '../memesData'
export default function Meme(){
    function getnewMeme(){
        console.log("I was clicked")
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        console.log(randomNumber);
        console.log(url);
    }
    return(
        <div>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input"/>
                <input type="text" placeholder="Bottom Text" className="form-input"/>
                <button onClick={getnewMeme} className="form-button">
                    Get a new meme image
                </button>
            </div>
        </div>
    )
}