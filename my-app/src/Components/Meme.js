import React from 'react'
import memesData from '../memesData'
export default function Meme(){
    let [memeImage, setMemeImage]= React.useState("")

    function getNewMeme(){
        console.log("I was clicked")
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage =(memesArray[randomNumber].url)
    }
    return(
        <div>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input"/>
                <input type="text" placeholder="Bottom Text" className="form-input"/>
                <button onClick={getNewMeme} className="form-button">
                    Get a new meme image
                </button>
            </div>
            <img src={memeImage} alt="new meme" className='meme-image'/>
        </div>
    )
}