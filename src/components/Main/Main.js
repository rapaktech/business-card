import './Main.css';
import React from 'react';
import emailIcon from '../../email-icon.jpg';
import linkedInIcon from '../../linkedin-icon.jpg';

export default function Main () {
    return (
        <div className='main'>
            <div className='main--bio'>
                <h3 className='main--bio-name'>Jim Ezesinachi</h3>
                <p className='main--bio-title'>Software Engineer</p>
                <a href='jimezesinachi.netlify.app' target='_blank' className='main--bio-link'>
                    jimezesinachi.netlify.app
                </a>
            </div>
            <div className='main--contact'>

            </div>
            <div className='main--contact-email'>
                <div className='main--contact-email-icon-container'>
                    <img src={emailIcon} alt='Email Icon' className='main--contact-email-icon'/>
                </div>
                <div className='main--contact-email-text'>
                    Email
                </div>
            </div>
            <div className='main--contact-linkedin'>
                <div className='main--contact-linkedin-icon-container'>
                    <img src={linkedInIcon} alt='LinkedIn Icon' className='main--contact-linkedin-icon'/>
                </div>
                <div className='main--contact-linkedin-text'>
                    LinkedIn
                </div>
            </div>
            <div className='main--info'>
                <div className='main--info-about'>
                    <h3 className='main--info-about-header'>About</h3>
                    <p className='main--info-about-text'>Hi there! I'm Jim. 
                        A former polymath, I now spend my days learning about computer software and writing some of my own. 
                        My focus at the moment is on server side development for web applications. 
                        My principal technology of use is Node.js.</p>
                </div>
                <div>
                    <h3 className='main--info-interests-header'>Interests</h3>
                    <p className='main--info-interests-text'>In my spare time, I read stuff about other scientific fields. 
                        I am very interested in medical technology, and the search for extra-terrestrial life. </p>
                </div>
            </div>
        </div>
    )
}
