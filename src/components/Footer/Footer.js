import './Footer.css';
import React from 'react';
import twitterIcon from '../../twitter-icon.jpg';
import githubIcon from '../../github-icon.jpg';
import instagramIcon from '../../instagram-icon.jpg';
import facebookIcon from '../../facebook-icon.jpg';

export default function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-social'>
                <a href='https://twitter.com/jimezesinachi' target='_blank' rel="noreferrer" className='footer-social-twitter'>
                    <img src={twitterIcon} alt='Twitter Icon' className='footer-social-twitter-icon' />
                </a>
                <a href='https://facebook.com/jimezesinachi' target='_blank' rel="noreferrer" className='footer-social-facebook'>
                    <img src={facebookIcon} alt='Facebook Icon' className='footer-social-facebook-icon' />
                </a>
                <a href='https://www.instagram.com/jimezesinachi' target='_blank' rel="noreferrer" className='footer-social-instagram'>
                    <img src={instagramIcon} alt='Instagram Icon' className='footer-social-instagram-icon' />
                </a>
                <a href='https://github.com/rapaktech' target='_blank' rel="noreferrer" className='footer-social-github'>
                    <img src={githubIcon} alt='Facebook Icon' className='footer-social-github-icon' />
                </a>
            </div>
        </footer>
    )
}
