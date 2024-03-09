import memeData from '../components/memeData.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function Meme() {
    let urlLink;
    const [meme, setMeme] = React.useState(memeData);

    function randomMeme() {
        const randomNumber = getRandom(0, 100);
        urlLink = meme.data.memes[randomNumber].url;

        return urlLink;
    }

    return (
        <div className="meme--body">
            <span className="meme--text">
                <label>
                    <p className="meme--top-text">
                        Top text
                        <input className="top-input" placeholder="  Top text" />
                    </p>
                </label>
                <label>
                    <p className="meme--bottom-text">
                        Bottom Text
                        <input className="bottom-input" placeholder="  Bottom text" />
                    </p>
                </label>
            </span>
            <button className="meme--button" type="button" onClick={randomMeme()}>Get a new meme image 🖼</button>
            <div className="image--container">
                <input className="image--picture" src={randomMeme()} type="image"/> 
            </div>
        </div>
    )
}