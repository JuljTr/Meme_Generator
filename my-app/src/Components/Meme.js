import React, { useState } from 'react'
import memesData from '../memesData'


export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    console.log()

    function getNewMeme() {
        console.log("I was clicked")
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme((prevMeme => ({
            ...prevMeme,
            randomImage: url
        })))
    }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input" />
                <input type="text" placeholder="Bottom Text" className="form-input" />
                <button onClick={getNewMeme} className="form-button">
                    Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} alt="new meme" className='meme-image' />
        </div>
    )
}