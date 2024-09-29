import React from 'react';
import resume from '/Users/smarit/Desktop/Coding Projects/This is me/dojo-blog/src/Tran_Sarah_Resume.pdf'
import './About.css'
import testImage from '/Users/smarit/Desktop/Coding Projects/This is me/dojo-blog/src/about-me-image.jpeg'
const About = () => {
    const openResume = () => {
        window.open({resume}, '_blank', 'noopener,noreferrer');

    };
    return ( 
        <div id="about" className="about">
            <div className="about-content">
                <h1>ABOUT ME</h1>

                <p>Hi! I'm Sarah. I'm a sophomore at Duke University studying Computer Science. I'm from McLean, Virginia around 20 minutes out from DC. In my free time, I love playing the guitar and drawing</p>
             
                <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div className="about-image">
                <img src={testImage} alt="About me" />
            </div>
        </div>
     );
}
 
export default About;