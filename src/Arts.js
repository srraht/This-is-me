import React from 'react';
import './Arts.css'

const Arts = () => {
    return ( 
        <div className="arts">
            <div className="arts-content">
                <h1>Music!</h1>
                <p>I started playing electric guitar around 4 years ago. My favorite guitar genre is 80s rock but I also like making covers of 60s and 70s folk. Click the button to see some music videos</p>
                <a href="https://www.instagram.com/srrahs_music/" target="_blank" rel="noopener noreferrer" className="music-button">
                    Music Videos
                </a>
                <h1>Visual Arts!</h1>
                <p>I've loved visual arts ever since I was little. My favorite mediums are digital and pastel. Scroll down to see some more!</p>
            </div>
        </div>
     );
}
 
export default Arts;