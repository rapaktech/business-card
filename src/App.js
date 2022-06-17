import './App.css';
import emailIcon from './email-icon.jpg';
import linkedInIcon from './linkedin-icon.jpg';
import twitterIcon from './twitter-icon.jpg';
import githubIcon from './github-icon.jpg';
import instagramIcon from './instagram-icon.jpg';
import facebookIcon from './facebook-icon.jpg';

function App() {
  return (
    <main className='App'>
      <div className='image-container'>
          <div className='image-container--image'></div>
      </div>
      <div className='main--bio'>
        <h3 className='main--bio-name'>Jim Ezesinachi</h3>
        <p className='main--bio-title'>Software Engineer</p>
        <a href='linktr.ee/jimezesinachi' target='_blank' className='main--bio-link'>
            linktr.ee/jimezesinachi
        </a>
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
          <h3 className='main--info-about-header'>About</h3>
          <p className='main--info-about-text'>Hi there! I'm Jim. 
              A former polymath, I now spend my days learning about computer software and writing some of my own. 
              My focus at the moment is on server side development for web applications. 
              My principal technology of use is Node.js.</p>
          <h3 className='main--info-interests-header'>Interests</h3>
          <p className='main--info-interests-text'>In my spare time, I read stuff about other scientific fields. 
              I am very interested in medical technology, and the search for extra-terrestrial life. </p>
        </div>
      </div>
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
    </main>
  );
}

export default App;
